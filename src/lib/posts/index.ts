import { z } from 'zod';
import type { SvelteComponent } from 'svelte';

// Zod schema for frontmatter validation
const PostMetadataSchema = z.object({
	slug: z.string(),
	title: z.string(),
	date: z.string(),
	excerpt: z.string(),
	tags: z.array(z.string()),
	imgSrc: z.string().optional()
});

export type PostMetadata = z.infer<typeof PostMetadataSchema> & {
	readingTime: number;
};

export interface Post {
	metadata: PostMetadata;
	component: typeof SvelteComponent;
}

interface RawPost {
	metadata: Record<string, unknown>;
	default: typeof SvelteComponent;
}

// Calculate reading time from content
function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	// Strip HTML/SVG tags and count words
	const text = content.replace(/<[^>]*>/g, '');
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / wordsPerMinute));
}

// Load all posts from markdown files
const imports = import.meta.glob('./*.md', { eager: true }) as Record<string, RawPost>;

function loadPosts(): Post[] {
	const posts: Post[] = [];

	for (const path in imports) {
		const rawPost = imports[path];
		if (!rawPost?.metadata || !rawPost?.default) continue;

		// Validate frontmatter
		const result = PostMetadataSchema.safeParse(rawPost.metadata);
		if (!result.success) {
			console.error(`Invalid frontmatter in ${path}:`, result.error.issues);
			continue;
		}

		// Get rendered content for reading time calculation
		const rendered = rawPost.default.render?.();
		const html = rendered?.html ?? '';
		const readingTime = calculateReadingTime(html);

		posts.push({
			metadata: { ...result.data, readingTime },
			component: rawPost.default
		});
	}

	return posts;
}

const allPosts = loadPosts();

// Get all posts sorted by date (newest first)
export function getAllPosts(): PostMetadata[] {
	return allPosts
		.map((p) => p.metadata)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | null {
	return allPosts.find((p) => p.metadata.slug.toLowerCase() === slug.toLowerCase()) ?? null;
}
