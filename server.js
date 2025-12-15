import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mime from "mime-types";

const app = express();
const PORT = 5173;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ dist 폴더를 정적 root로 지정
const distPath = __dirname;

// ✅ MIME 타입 강제 지정 (js, css 깨짐 방지)
app.use((req, res, next) => {
  const filePath = path.join(distPath, req.path);
  const type = mime.lookup(filePath);
  if (type) {
    res.setHeader("Content-Type", type);
  }
  next();
});

// ✅ 정적 파일 서비스
app.use(express.static(distPath));

// ✅ React Router 대응 (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
