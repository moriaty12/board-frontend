import React from "react";

export default function CompareProductCard({
  item,
}) {
  return (
    <div className="compare-product-card">

      <button className="close-btn">
        ×
      </button>

      <strong>{item.name}</strong>

      <p>{item.company}</p>

    </div>
  );
}