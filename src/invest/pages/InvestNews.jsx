// C:\board\board-frontend\src\invest\pages
import React from "react";
import { mock } from "../mockData";
import NewsList from "../components/NewsList";

export default function News() {
  return (
    <section style={styles.section}>
      <div style={styles.title}>5️⃣ 관련 뉴스 (제목/요약 + 원문 링크 방식)</div>
      <NewsList items={mock.news} symbolMap={mock.symbolMap} />
      <div style={styles.note}>
        ⚠️ 기사 전문은 표시하지 않고, 제목/요약 + 원문 링크(목업)만 제공
      </div>
    </section>
  );
}

const styles = {
  section: { display: "grid", gap: 10 },
  title: { fontWeight: 900, marginBottom: 4 },
  note: { marginTop: 4, opacity: 0.75, fontSize: 12, lineHeight: 1.5 },
};

