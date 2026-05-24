/**
 * Codegen drift check.
 *
 * Modes:
 *   default              — regenerate from CACHED specs in .openapi-cache/. Fails if
 *                          `src/generated/` differs from what is committed. Catches
 *                          hand-edits to generated files and PRs that bumped specs
 *                          without rerunning `npm run codegen`.
 *   --refresh            — also refetches every spec from docs.zoominfo.com first.
 *                          Reports both spec drift and generated drift. Use in the
 *                          scheduled drift watcher.
 *
 * Exit codes:
 *   0  no drift
 *   1  drift detected (writes a summary to stdout and to $GITHUB_STEP_SUMMARY if set)
 *   2  unexpected error
 */

import { spawnSync } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const refresh = process.argv.includes('--refresh');

function run(cmd: string, args: string[], env: Record<string, string> = {}): { stdout: string; status: number } {
  const r = spawnSync(cmd, args, {
    cwd: ROOT,
    env: { ...process.env, ...env },
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
  });
  return { stdout: r.stdout ?? '', status: r.status ?? 1 };
}

function gitDiff(paths: string[]): string {
  const r = run('git', ['diff', '--name-only', '--', ...paths]);
  if (r.status !== 0) return '';
  return r.stdout.trim();
}

function summarize(title: string, body: string): void {
  console.log(`\n=== ${title} ===\n${body}`);
  const summary = process.env.GITHUB_STEP_SUMMARY;
  if (summary) {
    writeFileSync(summary, `## ${title}\n\n\`\`\`\n${body}\n\`\`\`\n`, { flag: 'a' });
  }
}

function main(): number {
  if (!existsSync(resolve(ROOT, '.git'))) {
    console.error('codegen:check expects to run inside a git repository.');
    return 2;
  }

  const env: Record<string, string> = {};
  if (refresh) env.OPENAPI_REFRESH = '1';

  const gen = run('npx', ['tsx', 'scripts/codegen.ts'], env);
  if (gen.status !== 0) {
    console.error('codegen failed:');
    console.error(gen.stdout);
    return 2;
  }

  const watched = ['src/generated', refresh ? '.openapi-cache' : ''].filter(Boolean);
  const changed = gitDiff(watched);

  if (!changed) {
    console.log('No codegen drift detected.');
    return 0;
  }

  summarize(
    refresh ? 'Upstream OpenAPI drift detected' : 'Local codegen drift detected',
    changed,
  );
  if (!refresh) {
    summarize(
      'How to fix',
      'Run `npm run codegen` locally and commit the updated files under src/generated/.\n' +
        'If you intended to bump the spec, run `npm run codegen:refresh` to refetch from docs.zoominfo.com.',
    );
  }

  // For visibility in CI, dump a short diff of the first changed file.
  const first = changed.split('\n')[0];
  if (first) {
    const d = run('git', ['diff', '--stat', '--', first]);
    if (d.stdout) console.log(d.stdout);
  }
  return 1;
}

process.exit(main());
