import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: '/Kelly_Tarlton.github.io/', // Replace with the appropriate base path
  },
})
