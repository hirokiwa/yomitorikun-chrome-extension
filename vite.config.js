import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: './src/index.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
