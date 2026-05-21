import React from "react";

import { compareProducts } from "../mock/compareMock";

export default function ReturnCompareTable() {
  return (
    <section className="compare-table-section">

      <div className="section-title">
        <h3>수익률 비교 ⓘ</h3>

        <div className="period-tabs">
          <button>1개월</button>
          <button>3개월</button>
          <button>6개월</button>
          <button className="active">1년</button>
          <button>3년</button>
          <button>5년</button>
        </div>
      </div>

      <table className="compare-table">

        <thead>
          <tr>
            <th>상품명</th>
            <th>1년</th>
          </tr>
        </thead>

        <tbody>

          {compareProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>

              <td className="blue">
                {item.return1Y}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </section>
  );
}