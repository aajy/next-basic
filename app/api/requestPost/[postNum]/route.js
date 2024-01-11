import { postDB } from '@/app/DB/postData';
import { NextResponse } from 'next/server';
import fs from 'fs';

export function GET(req, res) {
	console.log(req.url);
	const { postNum } = res.params;
	return NextResponse.json({ result: postDB[parseInt(postNum)] });
}
export function DELETE(req, res) {
	const { postNum } = res.params;
	if (postNum) {
		const updatedPostDB = postDB.filter((el) => el.id !== parseInt(postNum));
		const combinedData = JSON.stringify(updatedPostDB);
		console.log('combinedData: ', combinedData);
		//fs모듈로 기존 postData.js의 파일내용을 변경해서 저장
		fs.writeFileSync(
			'./app/DB/postData.js',
			`export const postDB=${combinedData};`,
			'utf-8'
		);
		return NextResponse.json({ result: updatedPostDB }, { status: 200 });
	} else {
		return NextResponse.json({ result: 'fail to Post' }, { status: 400 });
	}
}
