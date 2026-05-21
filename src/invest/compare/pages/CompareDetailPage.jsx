import React from "react";
import "../styles/compare.css";

import { compareProducts } from "../mock/compareMock";

import CompareHeader from "../components/CompareHeader";
import CompareProductCard from "../components/CompareProductCard";
import FeeCompareTable from "../components/FeeCompareTable";
import ReturnCompareTable from "../components/ReturnCompareTable";
import CompareBottomAction from "../components/CompareBottomAction";

import AssetBottomNav from "../../components/AssetBottomNav";

export default function CompareDetailPage() {
  return (
    <div className="compare-page-wrap">
      <div className="compare-phone">

        <CompareHeader back title="S&P500 상품 비교" />

        <main className="compare-main">

          <div className="compare-date-row">
            <span>2024.05.20 기준 (일별 배치 업데이트)</span>
            <span>업데이트 : 05.20 02:30</span>
          </div>

          <section className="compare-product-section">

            <div className="section-title">
              <h3>비교 상품 (3/10)</h3>
              <button>편집</button>
            </div>

            <div className="compare-product-grid">
              {compareProducts.map((item) => (
                <CompareProductCard
                  key={item.id}
                  item={item}
                />
              ))}

              <div className="compare-add-card">
                + 추가
              </div>
            </div>

          </section>

          <FeeCompareTable />

          <ReturnCompareTable />

          <CompareBottomAction />

        </main>

        <AssetBottomNav />

      </div>
    </div>
  );
}