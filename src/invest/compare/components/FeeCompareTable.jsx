import React from "react";

import { compareProducts } from "../mock/compareMock";

export default function FeeCompareTable() {
  return (
    <section className="compare-table-section">

      <div className="section-title">
        <h3>총보수 비교 ⓘ</h3>

        <span>
          연 1,000만원 투자 시 30년 비용 차이
        </span>
      </div>

      <table className="compare-table">

        <thead>
          <tr>
            <th>상품명</th>
            <th>총보수</th>
            <th>30년 비용 차이</th>
          </tr>
        </thead>

        <tbody>

          {compareProducts.map((item, idx) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.fee}</td>

              <td className="green">
                {idx === 0
                  ? "-1,352,000원"
                  : idx === 1
                  ? "-812,000원"
                  : "-"
                }
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </section>
  );
}