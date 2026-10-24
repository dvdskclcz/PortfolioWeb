import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dvdskcl-web.pages.dev',
  integrations: [tailwind()]
});