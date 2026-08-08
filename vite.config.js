import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs', // Build to 'docs' folder for GitHub Pages deployment
    emptyOutDir: true,
  }
});
