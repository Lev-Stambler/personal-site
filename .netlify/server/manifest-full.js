export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blog/folded-data-avail/merkletree.png","blog/folded-data-avail/treescreenshot.png","blog/lean-scratch.png","blog/ramsey-theory-is-fun.svg","blog/ramsey.webp","blog/warrant.webp","favicon.png","robots.txt","typst/.jukit/.jukit_info.json","typst/ramsey-theory-is-fun/.jukit/.jukit_info.json","typst/ramsey-theory-is-fun/commands/crypto.pdf","typst/ramsey-theory-is-fun/commands/format.pdf","typst/ramsey-theory-is-fun/commands/main_commands.pdf","typst/ramsey-theory-is-fun/main.pdf","typst/ramsey-theory-is-fun/main.typ","typst/ramsey-theory-is-fun/ramsey-theory-is-fun.htm","typst/ramsey-theory-is-fun/ramsey-theory-is-fun.pdf","typst/ramsey-theory-is-fun/ramsey-theory-is-fun.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".txt":"text/plain",".json":"application/json",".pdf":"application/pdf",".htm":"text/html"},
	_: {
		entry: {"file":"_app/immutable/start-CNgYfACE.js","imports":["_app/immutable/start-CNgYfACE.js","_app/immutable/chunks/index-BZDOwnAI.js","_app/immutable/chunks/singletons-C6iqjkPa.js","_app/immutable/chunks/control-C7uy2HLq.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
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
				id: "/musings",
				pattern: /^\/musings\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/musings/[slug]",
				pattern: /^\/musings\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
