'use client';

import { useState, useEffect } from 'react';

export default function PostList() {
  const [Post, setPost] = useState('');

  useEffect(() => {
    const fetchPost = async (url) => {
      const data = await fetch(url, { method: 'GET' });
      const json = await data.json();
      console.log(json);
      setPost(json);
    };

    fetchPost('/api/post');
  }, []);

  return <div className="postList">postList</div>;
}
