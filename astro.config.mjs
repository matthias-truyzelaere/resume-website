// @ts-check
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site: 'https://matthias-truyzelaere.com',
    integrations: [sitemap()],
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        build: {
            minify: 'esbuild',
        },
    },
})
