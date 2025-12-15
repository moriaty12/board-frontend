import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5173;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dist 폴더 경로
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath, {
  extensions: ["html"],
  setHeaders: (res, filePath) => {
    if (path.extname(filePath) === ".js") {
      res.setHeader("Content-Type", "application/javascript");
    }
  }
}));

// SPA 라우터 fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
