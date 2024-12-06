import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jose3rodriguez.github.io/',
  base: '/jose3rodriguez.github.io/', // If your repo is named the same as your username, this can be empty
  output: 'static',
  outDir: './dist',
});