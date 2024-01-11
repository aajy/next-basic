'use client';
import styles from './post.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Post() {
	const [Post, setPost] = useState([]);
	const handleDelete = (id) => {
		console.log('id: ', id);
		fetch(`/api/requestPost/${id}`, {
			method: 'DELETE',
			headers: { 'Content-type': 'application/json' },
		}).then((response) => {
			if (response.ok) {
				response.json().then((data) => {
					console.log(data);
					setPost(data.result);
					alert('글 삭제에 성공했습니다.');
				});
			} else {
				console.log(response);
				alert('글 삭제에 실패했습니다.');
			}
		});
	};
	//순서4- 목록페이지에서 삭제된 게시글도 갱신되 정보값으로 목록 데이터 다시 출력
	useEffect(() => {
		fetch('/api/requestPost')
			.then((data) => data.json())
			.then((json) => setPost(json.result));
	}, []);

	return (
		<div className={clsx(styles.post)}>
			<h1>Post List</h1>
			<nav>
				<button>
					<Link href='/post/write'>Write Post</Link>
				</button>
			</nav>
			{Post.map((post) => {
				return (
					<article key={post.title}>
						<h2>
							<Link href={`/post/${post.id}`}>{post.title}</Link>
						</h2>
					</article>
				);
			})}
		</div>
	);
}
