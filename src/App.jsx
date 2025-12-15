// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BoardListPage from "./pages/BoardListPage.jsx";
import BoardDetailPage from "./pages/BoardDetailPage.jsx";
import BoardCreatePage from "./pages/BoardCreatePage.jsx";
import BoardUpdatePage from "./pages/BoardUpdatePage.jsx";
import QuoteBoard from "./pages/QuoteBoard.jsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to="/testboard/read" replace />} />
        <Route path="/testboard/read" element={<BoardListPage />} />
        <Route path="/testboard/detail" element={<BoardDetailPage />} />
        <Route path="/testboard/create" element={<BoardCreatePage />} />
        <Route path="/testboard/update" element={<BoardUpdatePage />} />
        {/* ✅ 호가창 라우트 */}
        <Route path="/quote/:ticker" element={<QuoteBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
