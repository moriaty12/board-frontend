import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Express (Termux) 배포용 Vite 설정
export default defineConfig({
  plugins: [react()],
  base: "./",       // ✅ 상대경로로 빌드 (./assets/...)
  build: {
    outDir: "dist", // ✅ 빌드 결과 폴더
    emptyOutDir: true,
  },
});
