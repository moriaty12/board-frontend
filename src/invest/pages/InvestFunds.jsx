// C:\board\board-frontend\src\invest\pages
import React from "react";
import { mock } from "../mockData";
import FundTable from "../components/FundTable";

export default function Funds() {
  return (
    <section style={styles.section}>
      <div style={styles.title}>3️⃣ 펀드 리스트</div>
      <FundTable title="삼성전자 관련 펀드" rows={mock.funds} />
      <div style={styles.note}>※ 기준일: 2025-xx-xx / 공공 데이터 (목업)</div>
    </section>
  );
}

const styles = {
  section: { display: "grid", gap: 10 },
  title: { fontWeight: 900, marginBottom: 4 },
  note: { marginTop: 4, opacity: 0.75, fontSize: 12 },
};


