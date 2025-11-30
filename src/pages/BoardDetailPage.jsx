// C:\board\board-frontend\src\pages\BoardDetailPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const API_BASE = "/api/board-posts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BoardDetailPage() {
  const [post, setPost] = useState(null);
  const query = useQuery();
  const id = query.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${API_BASE}/${id}`);
      setPost(res.data);
    };
    if (id) fetchPost();
  }, [id]);

  const handleDelete = async () => {
  if (!window.confirm("정말 삭제하시겠습니까?")) return;

  try {
    await axios.delete(`${API_BASE}/${id}`);
    alert("삭제되었습니다.");
    navigate("/"); // 메인(→ /testboard/read로 리다이렉트)
  } catch (error) {
    console.error("삭제 실패:", error);
    alert("삭제 중 오류가 발생했습니다.");
  }
};

  const formatDateTime = (dt) =>
    dt ? dt.replace("T", " ").substring(0, 19) : "";

  if (!id) return <div>잘못된 접근입니다. (id 없음)</div>;
  if (!post) return <div>로딩 중...</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", fontFamily: "sans-serif" }}>
      <h2>게시글 상세</h2>

      <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px" }}>
        <p><b>ID</b> : {post.id}</p>
        <p><b>제목</b> : {post.title}</p>
        <p><b>작성자</b> : {post.writer}</p>
        <p><b>작성일시</b> : {formatDateTime(post.createdAt)}</p>
        <p><b>내용</b></p>
        <div
          style={{
            border: "1px solid #eee",
            padding: "10px",
            minHeight: "80px",
            whiteSpace: "pre-wrap",
          }}
        >
          {post.content}
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/testboard/read")}>목록</button>{" "}
        <button onClick={() => navigate(`/testboard/update?id=${id}`)}>수정</button>{" "}
        <button onClick={handleDelete} style={{ color: "red" }}>삭제</button>
      </div>
    </div>
  );
}

export default BoardDetailPage;
