'use client';
import { useState, useEffect } from 'react';

export default function Post() {
  const [Post, setPost] = useState([]);

  useEffect(() => {
    fetch('/api/requestPost')
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        setPost(json.result);
      });
  }, []);

  return (
    <div className="postList">
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
