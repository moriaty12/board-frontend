import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "", // ✅ 비워두거나 './'가 아닌 이 형태로 (상대경로 문제 해결)
});
