'use client';
import { useEffect, useState } from 'react';

export default function PostDetail({ params }) {
	const { id } = params;
	const [PostEl, setPostEl] = useState(null);

	useEffect(() => {
		console.log(id);
		fetch(`/api/requestPost/${id}`)
			.then((data) => data.json())
			.then((json) => {
				console.log(json);
				setPostEl(json.result);
			});
	}, [id]);
	return (
		<div>
			<h2>{`${parseInt(id) + 1} 번째 게시글 상세페이지`}</h2>
			<p>{PostEl && PostEl.name}</p>
		</div>
	);
}
