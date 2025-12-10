import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: 'src',
  output: 'server',
  server: {
    host: true
  },
  site: 'https://example.com'
});
