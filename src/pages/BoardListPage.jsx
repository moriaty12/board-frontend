import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://192.168.35.225:8080/api/board-posts";

function BoardListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(API_BASE)
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.warn("예상치 못한 응답 형태:", data);
          setPosts([]);
        }
      })
      .catch((error) => {
        console.error("목록 조회 실패:", error);
        setPosts([]);
      });
  }, []);

  return (
    <div>
      <h1>React + Spring 게시판</h1>

      <h2>게시글 목록</h2>
      <table>
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
              <td colSpan={4}>게시글이 없습니다.</td>
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
                  <td>{post.title || "(제목 없음)"}</td>
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
