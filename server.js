import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5173;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ dist 폴더를 정적 루트로 지정
const distPath = path.join(__dirname);
app.use(express.static(distPath));

// ✅ SPA 라우팅 fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
