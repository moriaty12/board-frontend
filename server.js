import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");

// ✅ 정적 파일 서빙 (JS/CSS 등)
app.use(express.static(distPath));
app.use("/assets", express.static(path.join(distPath, "assets"))); // 있어도 되고 없어도 됨(보강용)

// ✅ SPA 라우팅
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = 5173;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Express server running at http://0.0.0.0:${PORT}`);
});
