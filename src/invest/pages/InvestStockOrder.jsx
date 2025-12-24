// C:\board\board-frontend\src\invest\pages
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function StockOrder() {
  const { code } = useParams();
  const [sp] = useSearchParams();
  const keyword = sp.get("q") ?? "";

  // 목업 호가 데이터
  const asks = [
    { price: "71,300", qty: 120 },
    { price: "71,400", qty: 80 },
    { price: "71,500", qty: 60 },
  ];
  const bids = [
    { price: "71,200", qty: 98 },
    { price: "71,100", qty: 150 },
    { price: "71,000", qty: 220 },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.title}>📈 종목 호가 (Demo)</div>
      <div style={styles.sub}>code: {code} {keyword ? ` / keyword: ${keyword}` : ""}</div>

      <div style={styles.grid}>
        <div style={styles.book}>
          <div style={styles.bookTitle}>매도</div>
          {asks.map((r, i) => (
            <div key={i} style={styles.row}>
              <div>{r.price}</div>
              <div style={{ opacity: 0.9 }}>{r.qty}</div>
            </div>
          ))}
        </div>

        <div style={styles.book}>
          <div style={styles.bookTitle}>매수</div>
          {bids.map((r, i) => (
            <div key={i} style={styles.row}>
              <div>{r.price}</div>
              <div style={{ opacity: 0.9 }}>{r.qty}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.balance}>
        <div style={{ fontWeight: 900, marginBottom: 6 }}>💰 내 잔고 (Demo)</div>
        <div>- 예수금: 3,200,000원</div>
        <div>- 매수 가능 금액: 3,000,000원</div>
        <div style={styles.note}>※ 실제 금융 거래 아님 / 시뮬레이션(목업)</div>
      </div>
    </section>
  );
}

const styles = {
  section: { display: "grid", gap: 10 },
  title: { fontWeight: 900, marginBottom: 0 },
  sub: { opacity: 0.75, fontSize: 12, marginBottom: 8 },

  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  book: {
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    padding: 12,
  },
  bookTitle: { fontWeight: 900, marginBottom: 8 },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  balance: {
    marginTop: 6,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.18)",
    padding: 12,
  },
  note: { marginTop: 8, opacity: 0.7, fontSize: 12 },
};
