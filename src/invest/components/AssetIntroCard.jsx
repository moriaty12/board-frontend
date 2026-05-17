import React from "react";

export default function AssetIntroCard() {
  return (
    <div className="asset-intro-card">
      <div>
        <h2>
          <span>내 자산</span>을 한번에 불러오세요
        </h2>

        <p>
          은행, 증권, 연금 자산을
          <br />
          한 번에 조회하고 분석해드려요.
        </p>
      </div>

      <div className="asset-intro-graphic">
        <div className="folder"></div>
        <div className="coin">₩</div>
      </div>
    </div>
  );
}