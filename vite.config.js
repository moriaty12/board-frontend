import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Express (Termux) 배포 완전 호환 설정
export default defineConfig({
  plugins: [react()],
  base: "./", // ⚡ 상대경로로 빌드 (이게 핵심)
  build: {
    outDir: "dist", // ⚙️ 명시적으로 dist로 지정
    emptyOutDir: true, // 🔄 빌드 시 기존 dist 초기화
  },
});
