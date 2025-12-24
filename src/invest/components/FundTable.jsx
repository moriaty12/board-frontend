// C:\board\board-frontend\src\invest\components
import React from "react";

export default function FundTable({ title, rows }) {
  return (
    <div style={styles.card}>
      <div style={styles.title}>📁 {title}</div>
      <div style={styles.wrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>펀드명</th>
              <th style={styles.th}>운용사</th>
              <th style={styles.th}>1M</th>
              <th style={styles.th}>3M</th>
              <th style={styles.th}>1Y</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx}>
                <td style={styles.td}>{r.fundName}</td>
                <td style={styles.td}>{r.manager}</td>
                <td style={styles.td}>{r.r1m}</td>
                <td style={styles.td}>{r.r3m}</td>
                <td style={styles.td}>{r.r1y}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(0,0,0,0.18)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: 12,
  },
  title: { fontWeight: 800, marginBottom: 10 },
  wrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    textAlign: "left",
    padding: "10px 8px",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    fontSize: 13,
    opacity: 0.9,
  },
  td: {
    padding: "10px 8px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    fontSize: 13,
  },
};

