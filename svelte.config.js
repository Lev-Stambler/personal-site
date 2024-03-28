// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import rehypeKatex from 'rehype-katex';
import remarkParse from 'remark-parse';
import remark from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			remarkPlugins: [remarkMath],
			rehypePlugins: [
				rehypeKatexSvelte,
				{
					macros: {
						'\\CC': '\\mathbb{C}',
						'\\vec': '\\mathbf'
					}
				}
				/* other rehype plugins... */
			]
		}),
		preprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
