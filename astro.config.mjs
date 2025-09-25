// @ts-check
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site: 'https://matthiastruyzelaere.com',
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
