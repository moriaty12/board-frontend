import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5173;

// ✅ dist 폴더 기준 정적 파일 서빙
app.use(express.static(path.join(__dirname, "dist")));

// ✅ assets 요청은 index.html로 fallback하지 않게 처리
app.get("/assets/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", req.path));
});

// ✅ 나머지는 SPA fallback
app.get("*", (req, res) => {
  console.log(`[FE] fallback to index.html for ${req.url}`);
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
