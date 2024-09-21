import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: './src/index.ts',
        contentScript: './src/contentScript.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
