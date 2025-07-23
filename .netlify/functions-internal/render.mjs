import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blog/folded-data-avail/merkletree.png","blog/folded-data-avail/treescreenshot.png","blog/lean-scratch.png","blog/ramsey.svg","blog/warrant.webp","favicon.png","posts/ramsey-theory-is-fun.pdf","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-BOkHLV3I.js","imports":["_app/immutable/start-BOkHLV3I.js","_app/immutable/chunks/index-BIkSNYnH.js","_app/immutable/chunks/singletons-8LBe1h63.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js')
		],
		routes: [
			{
				id: "/musings",
				pattern: /^\/musings\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/musings/[slug]",
				pattern: /^\/musings\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
