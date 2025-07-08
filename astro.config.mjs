import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://indodigilirgangbang.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});