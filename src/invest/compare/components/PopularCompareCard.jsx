import React from "react";

export default function PopularCompareCard({
  title,
  sub,
  count,
  emoji,
}) {
  return (
    <div className="popular-card">

      <div className="popular-emoji">
        {emoji}
      </div>

      <strong>{title}</strong>

      <p>{sub}</p>

      <span>{count}</span>

    </div>
  );
}