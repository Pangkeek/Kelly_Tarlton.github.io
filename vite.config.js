import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    base: '/Kelly_Tarlton.github.io/',
    assetsInlineLimit: 0,
  },
  assetsDir: './assets/media', // Set the appropriate assets directory
});
