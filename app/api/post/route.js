// app > api > post >route.js (GET. PUT, DELETE) Server Router
// client (GET) : fetch('/api/post/1', {method:'GET'});
// client (POST) : fetch('/api/post', {method:'POST'}, body:{data});

import { NextResponse } from 'next/server';
const posts = [
	{ name: 'David', age: 20 },
	{ name: 'Emily', age: 22 },
	{ name: 'Michael', age: 30 },
];
export function GET() {
	return NextResponse.json({
		result: posts,
	});
}
