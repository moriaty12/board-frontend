import React from "react";

export default function AccountCard({ account }) {
  return (
    <div className="account-card">
      <div
        className="account-icon"
        style={{ backgroundColor: account.color }}
      >
        {account.icon}
      </div>

      <div className="account-info">
        <div className="account-top">
          <strong>
            {account.type} <span>({account.company})</span>
          </strong>

          <button>상세 〉</button>
        </div>

        <div className="account-row">
          <span>수익률</span>
          <b>{account.returnRate}</b>
        </div>

        <div className="account-row">
          <span>현재 평가금액</span>
          <strong>{account.amount}</strong>
        </div>
      </div>
    </div>
  );
}