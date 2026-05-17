import React, { useState } from "react";

import "../styles/assetHome.css";

import AssetHeader from "../components/AssetHeader";
import AssetIntroCard from "../components/AssetIntroCard";
import InstitutionGrid from "../components/InstitutionGrid";
import AssetSummaryCard from "../components/AssetSummaryCard";
import AccountCard from "../components/AccountCard";
import AssetBottomNav from "../components/AssetBottomNav";

import { accounts } from "../assets/assetMock";

export default function AssetHomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="asset-page-wrap">
      <div className="asset-phone">
        <AssetHeader />

        <main className="asset-main">
          {!loaded ? (
            <>
              <AssetIntroCard />

              <section className="asset-section">
                <h3>내 자산 현황</h3>

                <div className="empty-asset-card">
                  <p>
                    아직 가져온 자산이 없어요
                    <br />
                    <span>
                      아래 버튼을 눌러
                      <br />
                      내 자산을 불러와 주세요.
                    </span>
                  </p>

                  <button onClick={() => setLoaded(true)}>
                    ☁ 내 자산 가져오기 (API 호출)
                  </button>
                </div>
              </section>

              <InstitutionGrid />

              <div className="safe-box">
                <div>🔒</div>
                <p>
                  <strong>안전하게 보호돼요</strong>
                  <br />
                  금융결제원 오픈 API를 통해 안전하게 조회됩니다.
                </p>
              </div>
            </>
          ) : (
            <>
              <AssetSummaryCard />

              <section className="asset-section">
                <div className="asset-section-title">
                  <h3>계좌별 자산 현황</h3>
                  <button>새로고침 ↻</button>
                </div>

                <div className="account-list">
                  {accounts.map((account) => (
                    <AccountCard key={account.id} account={account} />
                  ))}
                </div>

                <button className="add-account-btn">
                  + 다른 계좌 추가하기
                </button>
              </section>
            </>
          )}
        </main>

        <AssetBottomNav />
      </div>
    </div>
  );
}