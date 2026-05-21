import React from "react";

export default function CompareHeader({
  title = "비교",
  back = false,
}) {
  return (
    <div className="compare-header">

      <div className="compare-header-left">
        {back && <button>〈</button>}
        <h1>{title}</h1>
      </div>

      <div className="compare-header-icons">
        <button>🔔</button>
        <button>⚙️</button>
      </div>

    </div>
  );
}