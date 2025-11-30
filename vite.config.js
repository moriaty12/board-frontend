import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.35.225:8080', // Termux 서버
        changeOrigin: true,
      },
    },
  },
})
