import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ /testboard 로 접속한다면 반드시 /testboard/ 로 base 지정
export default defineConfig({
  plugins: [react()],
  base: '/testboard/',
})