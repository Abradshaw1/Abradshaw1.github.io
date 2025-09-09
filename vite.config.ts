import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-new'
  },
  server: {
    host: true,
    port: 8080,
    force: true
  }
});