import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jakknaj.github.io',
  base: process.env.ASTRO_BASE ?? '/',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/home/': '/'
  }
});
