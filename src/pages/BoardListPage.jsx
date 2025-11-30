import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://192.168.35.225:8080/api/board-posts"; // Termux 백엔드 주소

function BoardListPage() {
  // ✅ 처음부터 배열로
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(API_BASE)
      .then((response) => {
        const data = response.data;
        // ✅ 혹시라도 객체가 오면 빈 배열로 방어
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.warn("예상치 못한 응답 형태:", data);
          setPosts([]);
        }
      })
      .catch((error) => {
        console.error("목록 조회 실패:", error);
        // ✅ 실패해도 빈 배열로 세팅해서 map 에러 방지
        setPosts([]);
      });
  }, []);

  return (
    <div>
      {/* ... 상단 제목/버튼 등 ... */}
      <table>
        <thead>...</thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={4}>게시글이 없습니다.</td>
            </tr>
          ) : (
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.writer}</td>
                <td>{post.createdAt}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BoardListPage;
