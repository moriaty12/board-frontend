import React from "react";
import { institutions } from "../assets/assetMock";

export default function InstitutionGrid() {
  return (
    <section className="asset-section">
      <div className="asset-section-title">
        <h3>지원 금융기관</h3>
        <button>더보기</button>
      </div>

      <div className="institution-grid">
        {institutions.map((item) => (
          <div key={item.id} className="institution-item">
            <div className="institution-icon">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}