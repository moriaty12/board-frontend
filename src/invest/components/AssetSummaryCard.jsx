import React from "react";

export default function AssetSummaryCard() {
  return (
    <div className="asset-summary-card">
      <div>
        <div className="summary-title">총 자산 👁</div>

        <div className="summary-amount">12,843,000원</div>

        <div className="summary-change">
          지난달 대비 <span>+ 2.45% (↑305,000원)</span>
        </div>
      </div>

      <div className="donut-chart">
        <div></div>
      </div>
    </div>
  );
}