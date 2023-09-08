import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      input: {
        components: resolve(__dirname, './src/components/index.ts'),
      },
    },
    target: ['esnext'],
  },
  resolve: {
    alias: {
      '@cardanojs': resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
  ],
});
