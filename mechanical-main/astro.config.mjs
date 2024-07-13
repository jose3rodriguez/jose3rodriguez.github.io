import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    integrations: [
        preact(),
        react(),
        tailwind()],

        site: 'https://jose3rodriguez.github.io',

        output: 'static',
        outDir: './docs', 
        build: {
            assets: 'astro'
        }
});
