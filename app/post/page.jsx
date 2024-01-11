'use client';
import { useState, useEffect } from 'react';

export default function Post() {
  const [Post, setPost] = useState([]);

  useEffect(() => {
    //순서3 -컴포넌트 마운트시 미리 준비된 서버라우터로 데이터요청
    fetch('/api/requestPost')
      //순서4-응답이 성공하면 응답객체 서버로부터 전달받고 state에 전달
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        setPost(json.result);
      });
  }, []);

  return (
    <div className="postList">
      {/* 순서5- 응답받은 State값으로 화면 렌더링 */}
      {Post.map((post) => {
        return (
          <article key={post.name}>
            <h2>{post.name}</h2>
          </article>
        );
      })}
    </div>
  );
}
