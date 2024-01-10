async function fetchPresident() {
	const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const resultData = await data.json();
	return resultData;
}
export default async function President() {
	const data = await fetchPresident();
	console.log('data', data);
	return (
		<div className='president'>
			<h3>President</h3>
			<p>{data.name}</p>
		</div>
	);
}
