// 미리 불러올 데이터 즉 서버사이드 로직 여기서 파싱한 데이터를 +page.svelte 파일로 보냄
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	console.log(params);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
