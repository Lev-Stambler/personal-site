import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/posts';

export function load({ params }: { params: { slug: string } }) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		throw error(404, `Post not found: ${params.slug}`);
	}

	return {
		page: post.component,
		...post.metadata
	};
}
