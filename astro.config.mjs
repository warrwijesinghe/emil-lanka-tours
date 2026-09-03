import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind({ applyBaseStyles: false })],
  server: {
    host: true
  },
  site: process.env.PUBLIC_SITE_URL || 'https://emillankatours.com'
});
