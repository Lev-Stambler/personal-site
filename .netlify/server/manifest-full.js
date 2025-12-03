export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blog/MI.gif","blog/folded-data-avail/merkletree.png","blog/folded-data-avail/treescreenshot.png","blog/lean-scratch.png","blog/ramsey.svg","blog/typst-style.css","blog/warrant.webp","favicon.png","posts/ramsey-theory-is-fun.pdf","robots.txt"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".svg":"image/svg+xml",".css":"text/css",".webp":"image/webp",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-C_SJSRW9.js","imports":["_app/immutable/start-C_SJSRW9.js","_app/immutable/chunks/index-BIkSNYnH.js","_app/immutable/chunks/singletons-8LBe1h63.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/curious",
				pattern: /^\/curious\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/musings",
				pattern: /^\/musings\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/musings/[slug]",
				pattern: /^\/musings\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
