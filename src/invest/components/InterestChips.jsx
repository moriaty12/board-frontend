// C:\board\board-frontend\src\invest\components
import React, { useState } from "react";

export default function InterestChips({ interests, selected, onSelect, onAdd }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <div style={styles.row}>
        {interests.map((it) => (
          <button
            key={it}
            onClick={() => onSelect(it)}
            style={{ ...styles.chip, ...(selected === it ? styles.selected : null) }}
          >
            {it}
          </button>
        ))}
      </div>

      <div style={styles.addRow}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="관심사/키워드 추가"
          style={styles.input}
        />
        <button
          onClick={() => {
            onAdd(input);
            setInput("");
          }}
          style={styles.btn}
        >
          + 추가
        </button>
      </div>
    </div>
  );
}

const styles = {
  row: { display: "flex", gap: 8, flexWrap: "wrap" },
  chip: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
    fontSize: 13,
  },
  selected: {
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.28)",
  },
  addRow: { display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" },
  input: {
    flex: "1 1 240px",
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
};
