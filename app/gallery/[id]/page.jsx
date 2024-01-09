'use client';

export default function GalleryDetail({ params }) {
	console.log(params);
	return (
		<div className='detail'>
			<h3>{params.id + '번째 갤러리 상세페이지'}</h3>
		</div>
	);
}
