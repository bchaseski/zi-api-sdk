/**
 * Codegen entry point.
 *
 * Pulls every ZoomInfo OpenAPI spec referenced from https://docs.zoominfo.com/llms.txt
 * and writes TypeScript type-only modules into src/generated/.
 *
 * Run: npm run codegen
 */

import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import openapiTS, { astToString } from 'openapi-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');

const SPECS = [
  { slug: 'data', file: 'openapi-data-v1.yaml' },
  { slug: 'gtm-studio', file: 'openapi-gtm-studio-v1.yaml' },
  { slug: 'platform', file: 'openapi-platform-v1.yaml' },
  { slug: 'marketing', file: 'openapi-marketing-v1.yaml' },
  { slug: 'copilot', file: 'openapi-copilot-v1.yaml' },
  { slug: 'agent', file: 'openapi-agent-v1.yaml' },
] as const;

const BASE = 'https://docs.zoominfo.com/openapi';
const OUT_DIR = resolve(ROOT, 'src/generated');
const CACHE_DIR = resolve(ROOT, '.openapi-cache');

async function fetchSpec(file: string): Promise<string> {
  const cachePath = resolve(CACHE_DIR, file);
  const url = `${BASE}/${file}`;
  const refresh = process.env.OPENAPI_REFRESH === '1';
  if (!refresh && existsSync(cachePath)) {
    return readFile(cachePath, 'utf8');
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  const body = await res.text();
  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(cachePath, body, 'utf8');
  return body;
}

async function generate(slug: string, raw: string): Promise<string> {
  const spec = JSON.parse(raw);
  const ast = await openapiTS(spec, {
    alphabetize: true,
    immutable: false,
    exportType: false,
  });
  return astToString(ast);
}

async function main(): Promise<void> {
  await mkdir(OUT_DIR, { recursive: true });
  const indexLines: string[] = [
    '// AUTO-GENERATED. Do not edit by hand.',
    '// Regenerate with: npm run codegen',
    '',
  ];
  for (const { slug, file } of SPECS) {
    console.log(`[codegen] ${file}`);
    const raw = await fetchSpec(file);
    const ts = await generate(slug, raw);
    const outFile = resolve(OUT_DIR, `${slug}.ts`);
    const header =
      `// AUTO-GENERATED from ${file} (https://docs.zoominfo.com/openapi/${file}).\n` +
      `// Regenerate with: npm run codegen\n` +
      `/* eslint-disable */\n\n`;
    await writeFile(outFile, header + ts, 'utf8');
    const id = slug.replace(/-/g, '_');
    indexLines.push(`export * as ${id} from './${slug}.js';`);
  }
  await writeFile(resolve(OUT_DIR, 'index.ts'), indexLines.join('\n') + '\n', 'utf8');
  console.log(`[codegen] wrote ${SPECS.length} modules to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
