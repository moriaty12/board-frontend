// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5173;

// ✅ 빌드 결과(dist) 제공
app.use(express.static(path.join(__dirname, "dist")));

// ✅ SPA 라우팅 fallback
app.get("*", (req, res) => {
  console.log(`[FE] fallback to index.html for ${req.url}`);
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] React app served at http://0.0.0.0:${PORT}`);
});
