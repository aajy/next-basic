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
						<button onClick={() => handleDelete(post.id)}>delete</button>
					</article>
				);
			})}
		</div>
	);
}
