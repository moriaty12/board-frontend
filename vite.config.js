import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Express(Termux)용 Vite 설정 - 절대경로 사용
export default defineConfig({
  plugins: [react()],
  // base: "./",  // ❌ 이거 때문에 경로 꼬였음 → 제거
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
