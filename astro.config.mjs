import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
    site: 'https://matthiastruyzelaere.com',
    integrations: [sitemap()],
    adapter: cloudflare({
        imageService: 'compile',
    }),
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        build: {
            minify: 'esbuild',
        },
    },
})
