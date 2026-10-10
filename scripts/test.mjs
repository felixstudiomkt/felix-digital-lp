import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
await mkdir('outputs/tests', { recursive: true });
await build({ entryPoints: ['tests/lead-validation.test.ts'], outfile: 'outputs/tests/lead-validation.test.mjs', platform: 'node', format: 'esm', bundle: true });
const result = spawnSync(process.execPath, ['--test', 'outputs/tests/lead-validation.test.mjs'], { stdio: 'inherit' });
process.exitCode = result.status ?? 1;
