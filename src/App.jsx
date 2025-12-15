import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BoardListPage from "./pages/BoardListPage.jsx";
import BoardDetailPage from "./pages/BoardDetailPage.jsx";
import BoardCreatePage from "./pages/BoardCreatePage.jsx";
import BoardUpdatePage from "./pages/BoardUpdatePage.jsx";
import QuoteBoard from "./pages/QuoteBoard.jsx";

function App() {
  return (
    // ✅ basename="/" 추가
    <BrowserRouter basename="/">
      <Routes>
        {/* 기본 진입 시 목록으로 이동 */}
        <Route path="/" element={<Navigate to="/testboard/read" replace />} />

        {/* 게시판 관련 */}
        <Route path="/testboard/read" element={<BoardListPage />} />
        <Route path="/testboard/detail" element={<BoardDetailPage />} />
        <Route path="/testboard/create" element={<BoardCreatePage />} />
        <Route path="/testboard/update" element={<BoardUpdatePage />} />

        {/* ✅ 호가창 (파라미터 포함) */}
        <Route path="/quote/:ticker" element={<QuoteBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
