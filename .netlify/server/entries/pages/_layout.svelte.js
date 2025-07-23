import { c as create_ssr_component, s as subscribe, a as add_attribute, v as validate_component } from "../../chunks/hooks.js";
import { p as page } from "../../chunks/stores.js";
const css$1 = {
  code: "header.svelte-1998jz.svelte-1998jz{display:flex;justify-content:space-between}.corner.svelte-1998jz.svelte-1998jz{width:3em;height:3em}nav.svelte-1998jz.svelte-1998jz{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1998jz.svelte-1998jz{width:2em;height:3em;display:block}path.svelte-1998jz.svelte-1998jz{fill:var(--background)}ul.svelte-1998jz.svelte-1998jz{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1998jz.svelte-1998jz{position:relative;height:100%}li[aria-current='page'].svelte-1998jz.svelte-1998jz::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-1998jz a.svelte-1998jz{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1998jz.svelte-1998jz:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-1998jz"><div class="corner svelte-1998jz"></div>

	<nav class="svelte-1998jz"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1998jz"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1998jz"></path></svg>
		<ul class="svelte-1998jz"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-1998jz"><a href="/" class="svelte-1998jz">Home</a></li>
			
			<li${add_attribute("aria-current", $page.url.pathname === "/research" ? "page" : void 0, 0)} class="svelte-1998jz"><a href="/research" class="svelte-1998jz">Research</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/work" ? "page" : void 0, 0)} class="svelte-1998jz"><a href="/work" class="svelte-1998jz">Consulting</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/musings" ? "page" : void 0, 0)} class="svelte-1998jz"><a href="/musings" class="svelte-1998jz">Blog</a></li></ul>
		<svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1998jz"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1998jz"></path></svg></nav>

	<div class="corner svelte-1998jz"></div>
</header>`;
});
const css = {
  code: ".app.svelte-7ptsql.svelte-7ptsql{min-height:100vh;display:grid;grid-template-rows:auto auto auto}main.svelte-7ptsql.svelte-7ptsql{padding:1rem;width:100%;margin:0 auto;box-sizing:border-box;min-height:80vh}footer.svelte-7ptsql.svelte-7ptsql{display:grid;grid-template-columns:repeat(3, 1fr);justify-content:center;justify-items:center;padding:0 25% !important;margin-bottom:1rem}footer.svelte-7ptsql p.svelte-7ptsql{grid-column:1 / span 3;text-align:left;font-size:0.9rem;width:100%}footer.svelte-7ptsql a.svelte-7ptsql{font-weight:bold}@media(min-width: 480px){footer.svelte-7ptsql.svelte-7ptsql{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-7ptsql">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="svelte-7ptsql">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-7ptsql"><a href="https://github.com/Lev-Stambler" class="svelte-7ptsql">Github</a>
		<a href="https://x.com/StamblerLev" class="svelte-7ptsql">X</a>
		<a href="mailto:lev.stambler@gmail.com" class="svelte-7ptsql">Email Me</a>
		<p class="svelte-7ptsql">(*) If we are at the same conference, send a message for a tea break!
		</p></footer>
</div>`;
});
export {
  Layout as default
};
