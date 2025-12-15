import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5173;

// ✅ 1. 정적 파일 먼저 서빙
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/vite.svg", express.static(path.join(__dirname, "vite.svg")));

// ✅ 2. 그 외 라우팅은 React Router fallback
app.get("*", (req, res) => {
  console.log(`[FE] fallback to index.html for ${req.url}`);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
