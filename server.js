import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5173;

// ✅ 정적 파일 서빙 (CSS, JS 등)
app.use(express.static(__dirname));

// ✅ React Router fallback (SPA)
app.get("*", (req, res) => {
  // JS, CSS, 이미지 요청은 index.html로 보내지 않음
  if (req.url.match(/\.(js|css|svg|png|jpg|jpeg|gif|ico)$/)) {
    res.status(404).send("Not Found");
    return;
  }

  console.log(`[FE] fallback to index.html for ${req.url}`);
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[FE] ✅ React app served at http://0.0.0.0:${PORT}`);
});
