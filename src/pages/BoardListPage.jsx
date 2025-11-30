// C:\board\board-frontend\src\pages\BoardListPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = "/api/board-posts";

const thStyle = { border: "1px solid #ccc", padding: "8px", backgroundColor: "#f5f5f5" };
const tdStyle = { border: "1px solid #ccc", padding: "8px" };

function BoardListPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const res = await axios.get(API_BASE);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const formatDateTime = (dt) =>
    dt ? dt.replace("T", " ").substring(0, 19) : "";

  const handleRowClick = (id) => {
    navigate(`/testboard/detail?id=${id}`);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "30px auto", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "30px" }}>React + Spring 게시판</h1>

      <div style={{ marginBottom: "15px", textAlign: "right" }}>
        <button onClick={() => navigate("/testboard/create")}>새 글 작성</button>
      </div>

      <h2 style={{ marginBottom: "10px" }}>게시글 목록</h2>

      <table style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>제목</th>
            <th style={thStyle}>작성자</th>
            <th style={thStyle}>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 && (
            <tr>
              <td colSpan={4} style={{ padding: "10px" }}>
                게시글이 없습니다.
              </td>
            </tr>
          )}
          {posts.map((post) => (
            <tr
              key={post.id}
              onClick={() => handleRowClick(post.id)}
              style={{ cursor: "pointer" }}
            >
              <td style={tdStyle}>{post.id}</td>
              <td style={{ ...tdStyle, textAlign: "left", paddingLeft: "10px" }}>
                {post.title}
              </td>
              <td style={tdStyle}>{post.writer}</td>
              <td style={tdStyle}>{formatDateTime(post.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardListPage;
