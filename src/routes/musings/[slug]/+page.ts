// Since it's on +page.js, this code will run before page load (likely on server)

// Get posts info
const allPosts = import.meta.glob('../../../lib/posts/*.md', { eager: true });

let posts: any[] = [];
// Get the posts' slugs
for (let path in allPosts) {
	const post: any = allPosts[path];
	const slug = post.metadata.slug;
	const p = { post, slug };
	posts.push(p);
}

console.log(allPosts)

export function load({ params }: any) {
	const { slug } = params;

	// Find the post with the slug
	const filteredPost = posts.find((p) => {
		return p.slug.toLowerCase() === slug.toLowerCase();
	});
	return {
		// Tell page to load that post's module
		page: filteredPost.post.default
	};
}
