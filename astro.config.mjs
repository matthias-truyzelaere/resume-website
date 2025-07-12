// @ts-check
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
        imageService: 'compile',
    }),
    site: 'https://resume-website.matthias-truyzelaere-d60.workers.dev',
    integrations: [sitemap()],
})
