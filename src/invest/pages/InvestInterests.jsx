// C:\board\board-frontend\src\invest\pages
import React, { useState } from "react";
import { mock } from "../mockData";

export default function Interests() {
  const [interests, setInterests] = useState(mock.interests);
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("종목");

  function add() {
    const k = keyword.trim();
    if (!k) return;
    if (interests.includes(k)) return;
    setInterests((p) => [...p, k]);
    setKeyword("");
  }

  return (
    <section style={styles.section}>
      <div style={styles.title}>2️⃣ 관심사/카테고리 관리</div>

      <div style={styles.card}>
        <div style={{ marginBottom: 8, fontWeight: 700 }}>📌 나의 관심사</div>
        <ul style={{ margin: "8px 0 0 18px" }}>
          {interests.map((it) => (
            <li key={it} style={{ margin: "4px 0" }}>{it}</li>
          ))}
        </ul>

        <div style={{ marginTop: 14, fontWeight: 700 }}>+ 관심사 추가</div>
        <div style={styles.row}>
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="키워드 입력" style={styles.input} />
          <select value={type} onChange={(e) => setType(e.target.value)} style={styles.select}>
            <option value="종목">종목</option>
            <option value="테마">테마</option>
          </select>
          <button onClick={add} style={styles.btn}>저장</button>
        </div>

        <div style={styles.note}>선택 유형(종목/테마)은 목업 UI이며 저장 로직은 임의</div>
      </div>
    </section>
  );
}

const styles = {
  section: { display: "grid", gap: 10 },
  title: { fontWeight: 900, marginBottom: 4 },
  card: {
    background: "rgba(0,0,0,0.18)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: 12,
  },
  row: { display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" },
  input: {
    flex: "1 1 240px",
    padding: "10px 10px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "inherit",
    outline: "none",
  },
  select: {
    padding: "10px 10px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "inherit",
    outline: "none",
  },
  btn: {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.14)",
    color: "inherit",
    cursor: "pointer",
    fontWeight: 800,
  },
  note: { marginTop: 10, opacity: 0.75, fontSize: 12 },
};
