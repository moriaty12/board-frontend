// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BoardListPage from "./pages/BoardListPage.jsx";
import BoardDetailPage from "./pages/BoardDetailPage.jsx";
import BoardCreatePage from "./pages/BoardCreatePage.jsx";
import BoardUpdatePage from "./pages/BoardUpdatePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 진입 시 목록으로 */}
        <Route path="/" element={<Navigate to="/testboard/read" replace />} />

        {/* 4개 화면 */}
        <Route path="/testboard/read" element={<BoardListPage />} />
        <Route path="/testboard/detail" element={<BoardDetailPage />} />
        <Route path="/testboard/create" element={<BoardCreatePage />} />
        <Route path="/testboard/update" element={<BoardUpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
