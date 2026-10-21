import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({
  site: 'https://rogerg03.github.io',
  base: '/landing-sewing',
  integrations: [react()],
  output: 'static',
});
