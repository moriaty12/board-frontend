import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5173;

// ✅ dist 내부의 정적 파일 서빙
app.use(express.static(path.join(__dirname, "dist")));

// ✅ JS/CSS 요청 등 정적 파일은 그대로 통과
app.get(["/assets/*", "/vite.svg"], (req, res, next) => {
  res.sendFile(path.join(__dirname, "dist", req.path));
});

// ✅ SPA fallback (React Router 대응)
app.get("*", (req, res) => {
  console.log(`[FE] fallback to index.html for ${req.url}`);
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ✅ 서버 기동
app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
