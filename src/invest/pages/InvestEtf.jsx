// C:\board\board-frontend\src\invest\pages
import React from "react";
import { mock } from "../mockData";
import EtfChartCard from "../components/EtfChartCard";
import { Link } from "react-router-dom";

export default function Etf() {
  return (
    <section style={styles.section}>
      <div style={styles.title}>4️⃣ ETF 가격 추이 차트 (일봉)</div>
      <EtfChartCard etf={mock.etf} />
    </section>
    
  );
}

const styles = {
  section: { display: "grid", gap: 10 },
  title: { fontWeight: 900, marginBottom: 4 },
};

