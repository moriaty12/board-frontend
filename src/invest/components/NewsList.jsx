// C:\board\board-frontend\src\invest\components
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewsList({ items, symbolMap }) {
  const navigate = useNavigate();

  function onTagClick(tag) {
    const code = symbolMap[tag] ?? "UNKNOWN";
    navigate(`/invest/stocks/${encodeURIComponent(code)}?q=${encodeURIComponent(tag)}`);
  }

  return (
    <div style={{ display: "grid", gap: 10 }}>
      {items.map((n, idx) => (
        <div key={idx} style={styles.card}>
          <div style={styles.title}>{n.title}</div>
          <div style={styles.meta}>- 출처: {n.source}</div>
          <div style={styles.meta}>- 요약: {n.summary}</div>

          <div style={styles.actions}>
            {n.tags.map((t) => (
              <button key={t} style={styles.tagBtn} onClick={() => onTagClick(t)}>
                [{t}]
              </button>
            ))}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={styles.link}
              title="목업: 원문 링크"
            >
              원문 링크
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    padding: 12,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
  },
  title: { fontWeight: 800 },
  meta: { marginTop: 6, opacity: 0.9, fontSize: 13 },
  actions: { display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" },
  tagBtn: {
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
    fontSize: 12,
  },
  link: { marginLeft: 6, fontSize: 12, opacity: 0.9, textDecoration: "underline" },
};

