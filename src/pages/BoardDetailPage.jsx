// src/pages/BoardDetailPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
// 외부망 고정 API 주소
ss

function BoardDetailPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${API_BASE}/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.error("상세 조회 실패:", err);
        alert("게시글을 조회할 수 없습니다.");
        navigate("/testboard/read");
      });
  }, [id, navigate]);

  const handleDelete = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await axios.delete(`${API_BASE}/${id}`);
      alert("삭제되었습니다.");
      navigate("/testboard/read");
    } catch (e) {
      console.error("삭제 실패:", e);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  const goList = () => navigate("/testboard/read");
  const goUpdate = () => navigate(`/testboard/update?id=${id}`);

  if (!post) return <div style={{ padding: 40 }}>로딩 중...</div>;

  return (
    <div style={{ padding: 40 }}>
      <h2>게시글 상세</h2>
      <p><b>ID</b> : {post.id}</p>
      <p><b>제목</b> : {post.title}</p>
      <p><b>작성자</b> : {post.writer}</p>
      <p><b>내용</b></p>
      <div style={{ whiteSpace: "pre-wrap", border: "1px solid #ccc", padding: 8 }}>{post.content}</div>

      <div style={{ marginTop: 24 }}>
        <button onClick={goList}>목록</button>{" "}
        <button onClick={goUpdate}>수정</button>{" "}
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
}

export default BoardDetailPage;
