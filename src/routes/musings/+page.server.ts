// Import the markdown files for each post
const imports = import.meta.glob('../../lib/posts/*.md', { eager: true });

const posts: any[] = [];
for (const path in imports) {
	const post: any= imports[path];

	if (post) {
		// For each of them, MDsveX will do the heavy lifting. The "metadata"
		// is automatically recovered from the Frontmatter, and we're also
		// asking it to render the blog post so we're able to use it
		// as a component later on.
		posts.push({
			...post.metadata,
			...post.default.render()
		});
	}
}

// Filter the post and order them by published date
const filteredPosts = posts
	.filter((post) => !post.hidden)
	.sort((a, b) =>
		new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0
	);

// Expose this info to other files
// export filteredPosts;

import { error } from '@sveltejs/kit';

export async function load() {
	const result = Object.keys(posts).map((index: any) => {
		const { slug, title, date, excerpt, tags, readingTime, imgSrc } = posts[index];
		return {
			slug,
			imgSrc,
			title,
			date,
			excerpt,
			tags,
			readingTime,
		};
	});

	if (result) {
		return {
			posts: result
		};
	}

	throw error(500, `Could not load blog posts`);
}
