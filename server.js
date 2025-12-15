import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5173;

// ✅ 1️⃣ 정적 파일 먼저 서빙
app.use(express.static(__dirname));

// ✅ 2️⃣ React Router (SPA fallback)
app.get("*", (req, res) => {
  if (
    req.url.startsWith("/assets/") ||
    req.url.endsWith(".js") ||
    req.url.endsWith(".css") ||
    req.url.endsWith(".svg")
  ) {
    // 정적파일은 index.html로 넘기면 안 됨
    res.status(404).send("Not Found");
  } else {
    console.log(`[FE] fallback to index.html for ${req.url}`);
    res.sendFile(path.join(__dirname, "index.html"));
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
