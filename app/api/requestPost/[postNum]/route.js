import { postDB } from '@/DB/postData';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
  const { postNum } = await res.params;
  console.log(postNum);
  return NextResponse.json({ result: postDB[parseInt(postNum)] });
}
