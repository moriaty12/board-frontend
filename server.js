import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");

// ✅ (1) 정적 파일 라우팅 - 모든 하위 경로에 대응
app.use(express.static(distPath));
app.use("/assets", express.static(path.join(distPath, "assets"))); // 🔥 추가

// ✅ (2) SPA 라우팅 - 나머지 모든 요청은 index.html로
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = 5173;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Express server running at http://0.0.0.0:${PORT}`);
});
