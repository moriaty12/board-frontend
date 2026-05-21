import React from "react";

const tabs = [
  "전체",
  "ETF/ETN",
  "펀드",
  "퇴직연금 전용",
  "ISA 가능",
];

export default function CompareCategoryTabs() {
  return (
    <div className="compare-tabs">

      {tabs.map((tab, idx) => (
        <button
          key={tab}
          className={idx === 0 ? "active" : ""}
        >
          {tab}
        </button>
      ))}

    </div>
  );
}