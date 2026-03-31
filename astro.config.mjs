// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://balbus95.github.io',
  base: process.env.GITHUB_ACTIONS ? '/Daemon' : '/',
  integrations: [react()],
  server: {
    port: 5177
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
