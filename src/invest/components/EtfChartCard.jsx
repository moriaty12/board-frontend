// C:\board\board-frontend\src\invest\components
import React from "react";

export default function EtfChartCard({ etf }) {
  const w = 520;
  const h = 140;
  const padding = 14;

  const max = Math.max(...etf.points);
  const min = Math.min(...etf.points);
  const scaleX = (i) => padding + (i * (w - padding * 2)) / (etf.points.length - 1);
  const scaleY = (v) => {
    if (max === min) return h / 2;
    const t = (v - min) / (max - min);
    return padding + (1 - t) * (h - padding * 2);
  };

  const d = etf.points
    .map((v, i) => `${i === 0 ? "M" : "L"} ${scaleX(i).toFixed(1)} ${scaleY(v).toFixed(1)}`)
    .join(" ");

  return (
    <div style={styles.card}>
      <div style={styles.title}>📊 {etf.name}</div>
      <div style={styles.chartWrap}>
        <svg width="100%" viewBox={`0 0 ${w} ${h}`} role="img" aria-label="ETF line chart mock">
          <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div style={styles.meta}>
        <div>- 최근 종가: {etf.lastClose}</div>
        <div>- 1개월 수익률: {etf.perf1m}</div>
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
  chartWrap: {
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 10,
    background: "rgba(255,255,255,0.03)",
  },
  meta: { display: "flex", gap: 18, flexWrap: "wrap", marginTop: 10, opacity: 0.95 },
};


