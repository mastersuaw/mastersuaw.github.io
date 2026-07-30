// @ts-check
import { defineConfig } from 'astro/config';

// User-site deploy (https://mastersuaw.github.io/):
// - `base: '/portafolio/'` keeps portfolio URLs under /portafolio/
// - `scripts/prepare-github-pages.mjs` nests the build into docs/portafolio/
//   and leaves root files (app-ads.txt) at docs/
// Requires publishing from a user/org site repo (mastersuaw.github.io), not a
// project site named "portafolio".
// https://astro.build/config
export default defineConfig({
  site: 'https://mastersuaw.github.io',
  base: '/portafolio/',
  outDir: 'docs',
});

