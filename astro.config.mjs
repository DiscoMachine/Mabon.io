import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mabon.io',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  redirects: { '/contact': '/kontakt/' },
});
