import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");

// ✅ 모든 하위 경로에 대해 정적파일 서빙
app.use(express.static(distPath));
app.use("/testboard", express.static(distPath));
app.use("/testboard/read", express.static(distPath));
app.use("/assets", express.static(path.join(distPath, "assets")));

// ✅ SPA 라우팅 (React Router 대응)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = 5173;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Express server running at http://0.0.0.0:${PORT}`);
});
