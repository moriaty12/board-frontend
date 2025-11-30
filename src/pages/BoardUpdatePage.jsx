// C:\board\board-frontend\src\pages\BoardUpdatePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const API_BASE = "/api/board-posts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BoardUpdatePage() {
  const [form, setForm] = useState({ title: "", writer: "", content: "" });
  const query = useQuery();
  const id = query.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${API_BASE}/${id}`);
      setForm({
        title: res.data.title || "",
        writer: res.data.writer || "",
        content: res.data.content || "",
      });
    };
    if (id) fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API_BASE}/${id}`, form);
    navigate(`/testboard/detail?id=${id}`);
  };

  if (!id) return <div>잘못된 접근입니다. (id 없음)</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", fontFamily: "sans-serif" }}>
      <h2>게시글 수정</h2>
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
        <button type="submit">수정 완료</button>{" "}
        <button type="button" onClick={() => navigate(`/testboard/detail?id=${id}`)}>
          취소
        </button>
      </form>
    </div>
  );
}

export default BoardUpdatePage;
