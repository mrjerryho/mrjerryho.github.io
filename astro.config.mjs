// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mrjerryho.com',
  trailingSlash: 'ignore',

  // Old Jekyll URLs that people may still have bookmarked.
  redirects: { '/cv': '/', '/blog': '/', '/about': '/', '/how-i-build': '/' },

  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});