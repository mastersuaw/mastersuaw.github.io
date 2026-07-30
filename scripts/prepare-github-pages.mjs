/**
 * Restructures the Astro build for a GitHub Pages *user site* (domain root).
 *
 * Astro with `base: '/portafolio/'` emits a flat `docs/` tree and prefixes URLs
 * with `/portafolio/`. For a user site at https://mastersuaw.github.io/ the
 * files must live under `docs/portafolio/`, while root-only files (app-ads.txt)
 * stay at `docs/`.
 *
 * Assumption: the publishing repo is a user/org site (`mastersuaw.github.io`),
 * not a project site named `portafolio` (which can only serve under /portafolio/).
 */
import { access, mkdir, readdir, rename, rm, writeFile, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = 'docs';
const STAGING = '.pages-staging';

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(OUT))) {
    throw new Error(`Build output not found: ${OUT}/. Run astro build first.`);
  }

  await rm(STAGING, { recursive: true, force: true });
  await mkdir(join(STAGING, 'portafolio'), { recursive: true });

  const entries = await readdir(OUT, { withFileTypes: true });
  for (const entry of entries) {
    const from = join(OUT, entry.name);
    if (entry.name === 'app-ads.txt') {
      await rename(from, join(STAGING, 'app-ads.txt'));
      continue;
    }
    // .nojekyll is recreated at the artifact root below
    if (entry.name === '.nojekyll') {
      await rm(from, { force: true });
      continue;
    }
    await rename(from, join(STAGING, 'portafolio', entry.name));
  }

  if (!(await exists(join(STAGING, 'app-ads.txt')))) {
    if (!(await exists('public/app-ads.txt'))) {
      throw new Error('public/app-ads.txt is missing; cannot place it at site root.');
    }
    await copyFile('public/app-ads.txt', join(STAGING, 'app-ads.txt'));
  }

  await writeFile(
    join(STAGING, 'index.html'),
    `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/portafolio/" />
    <link rel="canonical" href="https://mastersuaw.github.io/portafolio/" />
    <title>mastersuaw</title>
    <script>location.replace('/portafolio/');</script>
  </head>
  <body>
    <p><a href="/portafolio/">Ir al portafolio</a></p>
  </body>
</html>
`,
  );

  await writeFile(join(STAGING, '.nojekyll'), '');

  await rm(OUT, { recursive: true, force: true });
  await rename(STAGING, OUT);

  console.log('GitHub Pages artifact ready:');
  console.log('  /app-ads.txt');
  console.log('  /index.html  → redirect to /portafolio/');
  console.log('  /portafolio/ → portfolio site');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
