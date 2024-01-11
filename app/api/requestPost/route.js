import { NextResponse } from 'next/server';

//순서1- DB에 데이터 준비
const posts = [
  { id: 1, name: 'David', age: 20 },
  { id: 2, name: 'Emily', age: 22 },
  { id: 3, name: 'Michael', age: 30 },
];

//순서2-클라이언트로부터 요청이 들어올떄를 대비해서
//미리 요청에 대한 응답로직 라우터 준비
export function GET() {
  return NextResponse.json({ result: posts });
}
