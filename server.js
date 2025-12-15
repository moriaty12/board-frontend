import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5173;

// ✅ 현재 server.js가 위치한 곳 기준
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ dist 폴더를 명시적으로 static root로 설정
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// ✅ SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
