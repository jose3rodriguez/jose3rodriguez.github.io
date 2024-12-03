// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jose3rodriguez.github.io',
  base: '/jose3rodriguez.github.io', // If your site is hosted in a repository other than the root URL
  output: 'static',
  outDir: './docs', // This is where your static files will be generated
});