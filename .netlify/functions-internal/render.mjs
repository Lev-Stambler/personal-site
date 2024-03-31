import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blog/folded-data-avail/merkletree.png","blog/lean-scratch.png","blog/warrant.webp","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-f9Mo1uxj.js","imports":["_app/immutable/start-f9Mo1uxj.js","_app/immutable/chunks/index-CJnp8ZGS.js","_app/immutable/chunks/singletons-DSUcQoRO.js"],"stylesheets":[],"fonts":[]},
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
