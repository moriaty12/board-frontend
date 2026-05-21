// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 테스트 페이지
import BoardListPage from "./pages/BoardListPage.jsx";
import BoardDetailPage from "./pages/BoardDetailPage.jsx";
import BoardCreatePage from "./pages/BoardCreatePage.jsx";
import BoardUpdatePage from "./pages/BoardUpdatePage.jsx";
import QuoteBoard from "./pages/QuoteBoard.jsx";

// ✅ 투자 대시보드 (추가)
import InvestHome from "./invest/pages/InvestHome.jsx";
import InvestInterests from "./invest/pages/InvestInterests.jsx";
import InvestFunds from "./invest/pages/InvestFunds.jsx";
import InvestEtf from "./invest/pages/InvestEtf.jsx";
import InvestNews from "./invest/pages/InvestNews.jsx";
import InvestStockOrder from "./invest/pages/InvestStockOrder.jsx";

// 2026 05 17 실 포트폴리오용 추가
import AssetHomePage from "./invest/pages/AssetHomePage";
// 2026 05 21 실 포트폴리오용 추가 2
import CompareMainPage from "./invest/compare/pages/CompareMainPage";
import CompareDetailPage from "./invest/compare/pages/CompareDetailPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* ================= 테스트 페이지) ================= */}
        <Route path="/" element={<Navigate to="/testboard/read" replace />} />
        <Route path="/testboard/read" element={<BoardListPage />} />
        <Route path="/testboard/detail" element={<BoardDetailPage />} />
        <Route path="/testboard/create" element={<BoardCreatePage />} />
        <Route path="/testboard/update" element={<BoardUpdatePage />} />
        <Route path="/quote/:ticker" element={<QuoteBoard />} />

        {/* ================= 신규 투자 대시보드 ================= */}
        <Route path="/invest" element={<InvestHome />} />
        <Route path="/invest/interests" element={<InvestInterests />} />
        <Route path="/invest/funds" element={<InvestFunds />} />
        <Route path="/invest/etf" element={<InvestEtf />} />
        <Route path="/invest/news" element={<InvestNews />} />
        <Route path="/invest/stocks/:code" element={<InvestStockOrder />} />

        // 2026 05 17 실 포트폴리오용 추가
        <Route path="/invest/assets" element={<AssetHomePage />} />
        // 2026 05 21 실 포트폴리오용 추가 2
        <Route path="/invest/compare" element={<CompareMainPage />} />
        <Route path="/invest/compare/detail" element={<CompareDetailPage />} />

        {/* ================= 안전장치 ================= */}
        <Route path="*" element={<Navigate to="/testboard/read" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
