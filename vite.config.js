import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/testboard/",  // 🔥 이 줄 주석 처리 or 삭제
  base: "/",               // 또는 아예 이 줄도 빼도 됨 (기본값이 "/")
});
