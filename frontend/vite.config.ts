import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/shared/components'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
