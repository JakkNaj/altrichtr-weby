import { readFile, readdir, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const [directory, basePath] = process.argv.slice(2);

if (!directory || !basePath) {
  throw new Error('Usage: node scripts/prepare-pages.mjs <dist-directory> <base-path>');
}

async function rewrite(directoryPath) {
  for (const entry of await readdir(directoryPath, { withFileTypes: true })) {
    const entryPath = join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      await rewrite(entryPath);
      continue;
    }
    if (!['.html', '.css'].includes(extname(entry.name))) continue;

    const source = await readFile(entryPath, 'utf8');
    const output = source
      .replace(/(["'(])\/images\//g, `$1${basePath}/images/`)
      .replace(/(["'(])\/uploads\//g, `$1${basePath}/uploads/`)
      .replace('href="/favicon.svg"', `href="${basePath}/favicon.svg"`);

    if (output !== source) await writeFile(entryPath, output);
  }
}

await rewrite(directory);
