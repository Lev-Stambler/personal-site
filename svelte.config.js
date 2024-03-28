// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import rehypeKatex from 'rehype-katex'
import remark from 'remark-math'
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			rehypePlugins: [rehypeKatex],
			remarkPlugins: [remark]
		}),
		preprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
