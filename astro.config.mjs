import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    site: 'https://pramod-deshpande.github.io',
    base: import.meta.env.DEV ? "/" : "/pramod-website",
    // base: '/pramod-website',


});

