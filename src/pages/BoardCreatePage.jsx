// src/pages/BoardCreatePage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 외부망 고정 API 주소
const API_BASE =
  window.location.hostname.includes("192.168.") ||
  window.location.hostname.includes("localhost")
    ? "http://192.168.35.225:8889"
    : "http://175.116.0.43:8889";

function BoardCreatePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    writer: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_BASE, form);
      alert("등록되었습니다.");
      navigate("/testboard/read");
    } catch (err) {
      console.error("등록 실패:", err);
      alert("등록 중 오류가 발생했습니다.");
    }
  };

  const goList = () => navigate("/testboard/read");

  return (
    <div style={{ padding: 40 }}>
      <h2>새 글 작성</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>제목</label>
          <br />
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            style={{ width: "400px" }}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>작성자</label>
          <br />
          <input
            name="writer"
            value={form.writer}
            onChange={onChange}
            style={{ width: "400px" }}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>내용</label>
          <br />
          <textarea
            name="content"
            value={form.content}
            onChange={onChange}
            rows={6}
            style={{ width: "400px" }}
          />
        </div>
        <div style={{ marginTop: 16 }}>
          <button type="submit">등록</button>{" "}
          <button type="button" onClick={goList}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardCreatePage;
