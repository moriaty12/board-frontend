// C:\board\board-frontend\src\invest\pages
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { mock } from "../mockData.js";
import SummaryBlock from "../components/SummaryBlock.jsx";
import InterestChips from "../components/InterestChips.jsx";
import NewsList from "../components/NewsList.jsx"; // ✅ 추가

export default function InvestHome() {
  const [interests, setInterests] = useState(mock.interests);
  const [selected, setSelected] = useState(interests[0] ?? "삼성전자");

  function addInterest(k) {
    const v = k.trim();
    if (!v) return;
    if (interests.includes(v)) return;
    const next = [...interests, v];
    setInterests(next);
    setSelected(v);
  }

  // ✅ 홈에서는 뉴스 3개만 미리보기
  const newsPreview = (mock.news ?? []).slice(0, 3);

  return (
    <div style={{ padding: 16, maxWidth: 900 }}>
      <h2 style={{ marginBottom: 10 }}>투자 정보 대시보드 (목업)</h2>

      <section style={{ marginBottom: 18 }}>
        <h3>오늘의 요약 (지연 시세 기준)</h3>
        <SummaryBlock summary={mock.summary} newsSubTitle="주요 뉴스" />
      </section>

      {/* ✅ 주요 뉴스 미리보기 */}
      <section style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <h3 style={{ margin: 0 }}>주요 뉴스</h3>
          <Link to="/invest/news" style={{ fontSize: 12 }}>
            더보기 →
          </Link>
        </div>

        <div style={{ marginTop: 10 }}>
          <NewsList items={newsPreview} symbolMap={mock.symbolMap} />
        </div>
      </section>

      <section>
        <h3>관심사 선택</h3>
        <InterestChips
          interests={interests}
          selected={selected}
          onSelect={setSelected}
          onAdd={addInterest}
        />
        <div style={{ marginTop: 10, fontSize: 12, opacity: 0.8 }}>
          선택한 관심사: {selected}
        </div>
      </section>
      <section style={{ marginBottom: 20 }}>
        <h3>바로가기</h3>
        <ul>
          <li><Link to="/invest/etf">📈 ETF 가격 추이</Link></li>
          <li><Link to="/invest/funds">📊 펀드 리스트</Link></li>
          <li><Link to="/invest/news">📰 뉴스 전체 보기</Link></li>
          <li><Link to="/invest/interests">⭐ 관심사 관리</Link></li>
        </ul>
      </section>


    </div>
  );
}

