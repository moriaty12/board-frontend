import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5173;

// ✅ 현재 폴더(~/apps/board-frontend)의 정적 파일 제공
app.use(express.static(__dirname));

// ✅ assets 요청은 index.html로 fallback하지 않게 함
app.get("/assets/*", (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});

// ✅ SPA fallback (React Router 지원)
app.get("*", (req, res) => {
  console.log(`[FE] fallback to index.html for ${req.url}`);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
