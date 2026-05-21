import React from "react";
import "../styles/compare.css";

import CompareHeader from "../components/CompareHeader";
import CompareSearchBar from "../components/CompareSearchBar";
import CompareCategoryTabs from "../components/CompareCategoryTabs";
import PopularCompareCard from "../components/PopularCompareCard";
import CompareHistoryCard from "../components/CompareHistoryCard";

import AssetBottomNav from "../../components/AssetBottomNav";

export default function CompareMainPage() {
  return (
    <div className="compare-page-wrap">
      <div className="compare-phone">

        <CompareHeader />

        <main className="compare-main">

          <div className="compare-intro-card">
            <div>
              <h2>
                <span>투자 상품</span>을 비교해보세요
              </h2>

              <p>
                운용기관별 수수료와 수익률을 비교하고
                <br />
                나에게 맞는 상품을 찾아보세요.
              </p>
            </div>

            <div className="compare-icon">🔎</div>
          </div>

          <CompareSearchBar />

          <CompareCategoryTabs />

          <section className="compare-section">
            <div className="section-title">
              <h3>인기 상품</h3>
              <button>더보기 〉</button>
            </div>

            <div className="popular-grid">
              <PopularCompareCard
                title="S&P500"
                sub="미국 대표 지수"
                count="23개 상품"
                emoji="🇺🇸"
              />

              <PopularCompareCard
                title="나스닥100"
                sub="미국 기술주 중심"
                count="18개 상품"
                emoji="📈"
              />

              <PopularCompareCard
                title="TDF"
                sub="생애주기 투자"
                count="31개 상품"
                emoji="🎯"
              />
            </div>
          </section>

          <section className="compare-section">
            <div className="section-title">
              <h3>비교 히스토리</h3>
              <button>전체 보기 〉</button>
            </div>

            <div className="history-list">
              <CompareHistoryCard title="S&P500 비교" />
              <CompareHistoryCard title="나스닥100 비교" />
              <CompareHistoryCard title="TDF 비교" />
            </div>
          </section>

        </main>

        <AssetBottomNav />

      </div>
    </div>
  );
}