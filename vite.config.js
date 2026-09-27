import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 5173,
    host: true,
    strictPort: false,
    origin: 'http://localhost:5173'
  },
  preview: {
    port: 4173,
    host: true,
    strictPort: false,
    allowedHosts: 'all'
  }
})
