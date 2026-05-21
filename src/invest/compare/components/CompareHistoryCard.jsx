import React from "react";

export default function CompareHistoryCard({
  title,
}) {
  return (
    <div className="history-card">

      <div className="history-left">
        <div className="history-icon">
          📊
        </div>

        <div>
          <strong>{title}</strong>

          <p>3개 상품 비교</p>

          <span>2024.05.20 14:30</span>
        </div>
      </div>

      <button>〉</button>

    </div>
  );
}