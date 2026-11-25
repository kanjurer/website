// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kanjurer.github.io',
  base: '/website',
  trailingSlash: 'never',
  redirects: {
    "/website": "/website/blog/",
  },
});
