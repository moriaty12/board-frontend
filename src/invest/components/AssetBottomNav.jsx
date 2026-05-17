import React from "react";

const menus = [
  { id: "home", name: "홈", icon: "🏠", active: true },
  { id: "analysis", name: "분석", icon: "📊" },
  { id: "compare", name: "비교", icon: "🛡️" },
  { id: "recommend", name: "추천", icon: "⭐" },
  { id: "my", name: "마이", icon: "👤" },
];

export default function AssetBottomNav() {
  return (
    <div className="asset-bottom-nav">
      {menus.map((menu) => (
        <button
          key={menu.id}
          className={menu.active ? "active" : ""}
        >
          <span>{menu.icon}</span>
          <p>{menu.name}</p>
        </button>
      ))}
    </div>
  );
}