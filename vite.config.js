import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ Express 정적배포용: JS 경로를 상대경로로 변환
  build: {
    outDir: "dist", // ✅ 명시적으로 dist 폴더 지정
  },
});