import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blog/lean-scratch.png","blog/warrant.webp","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-CuqSnLxV.js","imports":["_app/immutable/start-CuqSnLxV.js","_app/immutable/chunks/index-Bp98s2DX.js","_app/immutable/chunks/singletons-IspQAQPi.js"],"stylesheets":[],"fonts":[]},
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
