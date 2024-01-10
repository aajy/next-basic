'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function PostDetail({ params }) {
	const { num } = params;
	const [Post, setPost] = useState();

	useEffect(() => {
		const fetchPost = async (url) => {
			const data = await fetch(url);
			const result = await data.json();
			setPost(result);
		};
		fetchPost(`https://jsonplaceholder.typicode.com/posts/${num}`);
	}, [num]);
	return (
		<div>
			{Post?.body.split('\n').map((txt) => {
				return (
					<React.Fragment key={txt}>
						{txt}
						<br />
					</React.Fragment>
				);
			})}
		</div>
	);
}
