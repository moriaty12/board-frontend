// src/pages/BoardListPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://192.168.35.225:8080/api/board-posts";

function BoardListPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_BASE)
      .then((res) => {
        const data = res.data;
        setPosts(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("목록 조회 실패:", err);
        setPosts([]);
      });
  }, []);

  const goCreate = () => navigate("/testboard/create");
  const goDetail = (id) => navigate(`/testboard/detail?id=${id}`);

  return (
    <div style={{ padding: "40px" }}>
      <h1>React + Spring 게시판</h1>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 40 }}>
        <h2>게시글 목록</h2>
        <button onClick={goCreate}>새 글 작성</button>
      </div>

      <table border="1" cellPadding="8" cellSpacing="0" style={{ marginTop: 16, width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                게시글이 없습니다.
              </td>
            </tr>
          ) : (
            posts.map((post) => {
              const formattedDate = post.createdAt
                ? new Date(post.createdAt).toLocaleString("ko-KR", {
                    timeZone: "Asia/Seoul",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })
                : "";

              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  {/* 제목 클릭 시 상세로 이동 */}
                  <td
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => goDetail(post.id)}
                  >
                    {post.title || "(제목 없음)"}
                  </td>
                  <td>{post.writer || ""}</td>
                  <td>{formattedDate}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BoardListPage;
