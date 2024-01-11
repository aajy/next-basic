import { postDB } from '@/DB/postData';
import { NextResponse } from 'next/server';

//모든 데이터 가져오는 서버 라우터
export function GET() {
	return NextResponse.json({ result: postDB });
}
//클라이언트로부터 POST방식으로 특정데이터를 전달 받아서 저장해주는 서버 라우터
export async function POST(req, res) {
	const payload = await req.json();
	if (payload)
		return NextResponse.json({ result: 'data posted' }, { status: 200 });
	else return NextResponse.json({ result: 'fail to Post' }, { status: 400 });
}
