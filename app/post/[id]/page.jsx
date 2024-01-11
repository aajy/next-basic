'use client';
import { useEffect, useState } from 'react';

export default function PostDetail({ params }) {
	const { id } = params;
	const [Data, setData] = useState({});

	useEffect(() => {
		const fetchPost = async (url) => {
			const data = await fetch(url, { method: 'GET' });
			const json = await data.json();
			console.log('json', json.result);
			setData(json.result);
		};

		fetchPost(`/api/requestPost/${id}`);
	}, []);
	return (
		<div>
			<h2>{`${id} 번째`}</h2>
		</div>
	);
}
