// C:\board\board-frontend\src\invest\components
import React from "react";

export default function SummaryBlock({ summary, newsSubTitle = "주요 뉴스" }) {
  return (
    <div style={styles.box}>
      <div style={styles.row}>
        <div>- 관련 종목 수: {summary.relatedStocksCount}</div>
        <div>- ETF: {summary.etfCount}</div>
      </div>
      <div style={styles.row}>
        <div>- 펀드: {summary.fundCount}</div>
      </div>

      <div style={styles.subDivider}>
        <div style={styles.subTitle}>{newsSubTitle}</div>
      </div>
      <div>- 주요 뉴스: {summary.newsCount}</div>
    </div>
  );
}

const styles = {
  box: {
    padding: 12,
    borderRadius: 12,
    border: "1px dashed rgba(255,255,255,0.22)",
    background: "rgba(255,255,255,0.03)",
    lineHeight: 1.7,
  },
  row: { display: "flex", gap: 16, flexWrap: "wrap" },
  subDivider: {
    marginTop: 10,
    paddingTop: 10,
    borderTop: "1px solid rgba(255,255,255,0.12)",
  },
  subTitle: { fontWeight: 900, letterSpacing: 0.2 },
};
