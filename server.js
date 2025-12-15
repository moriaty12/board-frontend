import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");

// ✅ 1. 정적 파일 제공 (항상 맨 위)
app.use(express.static(distPath));

// ✅ 2. SPA 라우팅 - 정적 파일이 아닌 모든 요청은 index.html로
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// ✅ 3. 서버 실행
const PORT = 5173;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Express server running at http://0.0.0.0:${PORT}`);
});
