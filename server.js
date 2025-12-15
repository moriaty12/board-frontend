import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5173;

// ✅ 정적 파일을 정확히 dist 폴더 기준으로
app.use("/", express.static(path.join(__dirname, "dist")));

// ✅ SPA fallback — assets 요청은 통과
app.get("*", (req, res) => {
  if (req.path.startsWith("/assets/")) {
    return res.sendFile(path.join(__dirname, "dist", req.path));
  }
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
