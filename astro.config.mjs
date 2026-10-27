import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://heminwon.github.io',
  base: '/blog',
  output: 'static',
  markdown: { shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false } },
  build: { format: 'file' },
  publicDir: './static',
});
