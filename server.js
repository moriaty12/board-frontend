import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mime from "mime-types";

const app = express();
const PORT = 5173;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ dist 경로 설정
const distPath = path.join(__dirname, "dist");

// ✅ 정적 파일 서빙 (MIME 타입 보정)
app.use(
  express.static(distPath, {
    setHeaders: (res, filePath) => {
      const type = mime.lookup(filePath);
      if (type) {
        res.setHeader("Content-Type", type);
      }
    },
  })
);

// ✅ SPA fallback (React Router 대응)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
