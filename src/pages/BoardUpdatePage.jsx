// src/pages/BoardUpdatePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
// 외부망 고정 API 주소
const API_BASE = "http://175.116.0.43:8889/api/board-posts";

function BoardUpdatePage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    writer: "",
    content: "",
  });

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${API_BASE}/${id}`)
      .then((res) => {
        const { title, writer, content } = res.data;
        setForm({ title: title || "", writer: writer || "", content: content || "" });
      })
      .catch((err) => {
        console.error("수정용 조회 실패:", err);
        alert("게시글을 조회할 수 없습니다.");
        navigate("/testboard/read");
      });
  }, [id, navigate]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_BASE}/${id}`, form);
      alert("수정되었습니다.");
      navigate(`/testboard/detail?id=${id}`);
    } catch (err) {
      console.error("수정 실패:", err);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  const goDetail = () => navigate(`/testboard/detail?id=${id}`);

  return (
    <div style={{ padding: 40 }}>
      <h2>게시글 수정</h2>
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
          <button type="submit">저장</button>{" "}
          <button type="button" onClick={goDetail}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardUpdatePage;
