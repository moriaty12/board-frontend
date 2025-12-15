import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");

// ✅ 정적파일 제공
app.use(express.static(distPath));

// ✅ SPA 라우팅 지원 (React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = 5173;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Express server running at http://0.0.0.0:${PORT}`);
});
