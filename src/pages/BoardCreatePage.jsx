// C:\board\board-frontend\src\pages\BoardCreatePage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = "/api/board-posts";

function BoardCreatePage() {
  const [form, setForm] = useState({ title: "", writer: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_BASE, form);
    navigate("/testboard/read");
  };

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", fontFamily: "sans-serif" }}>
      <h2>새 글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>제목</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>작성자</label>
          <input
            name="writer"
            value={form.writer}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>내용</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={5}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit">등록</button>{" "}
        <button type="button" onClick={() => navigate("/testboard/read")}>
          취소
        </button>
      </form>
    </div>
  );
}

export default BoardCreatePage;
