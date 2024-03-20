import { c as create_ssr_component, s as subscribe, a as add_attribute, v as validate_component } from "../../chunks/hooks.js";
import { p as page } from "../../chunks/stores.js";
const css$1 = {
  code: "header.svelte-1u9z1tp.svelte-1u9z1tp{display:flex;justify-content:space-between}.corner.svelte-1u9z1tp.svelte-1u9z1tp{width:3em;height:3em}nav.svelte-1u9z1tp.svelte-1u9z1tp{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1u9z1tp.svelte-1u9z1tp{width:2em;height:3em;display:block}path.svelte-1u9z1tp.svelte-1u9z1tp{fill:var(--background)}ul.svelte-1u9z1tp.svelte-1u9z1tp{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1u9z1tp.svelte-1u9z1tp{position:relative;height:100%}li[aria-current='page'].svelte-1u9z1tp.svelte-1u9z1tp::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-1u9z1tp a.svelte-1u9z1tp{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1u9z1tp.svelte-1u9z1tp:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-1u9z1tp"><div class="corner svelte-1u9z1tp"></div>

	<nav class="svelte-1u9z1tp"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1u9z1tp"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1u9z1tp"></path></svg>
		<ul class="svelte-1u9z1tp"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-1u9z1tp"><a href="/" class="svelte-1u9z1tp">Home</a></li>
			
			<li${add_attribute("aria-current", $page.url.pathname === "/research" ? "page" : void 0, 0)} class="svelte-1u9z1tp"><a href="/research" class="svelte-1u9z1tp">Research</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/work" ? "page" : void 0, 0)} class="svelte-1u9z1tp"><a href="/work" class="svelte-1u9z1tp">Consulting</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/musings" ? "page" : void 0, 0)} class="svelte-1u9z1tp"><a href="/musings" class="svelte-1u9z1tp">Musings</a></li></ul>
		<svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1u9z1tp"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1u9z1tp"></path></svg></nav>

	<div class="corner svelte-1u9z1tp"></div>
</header>`;
});
const css = {
  code: ".app.svelte-1gotbf5.svelte-1gotbf5{min-height:100vh;display:grid;grid-template-rows:auto auto auto}main.svelte-1gotbf5.svelte-1gotbf5{padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box;min-height:80vh}footer.svelte-1gotbf5.svelte-1gotbf5{display:grid;grid-template-columns:repeat(4, 1fr);justify-content:center;justify-items:center;padding:0 25% !important;margin-bottom:1rem}footer.svelte-1gotbf5 a.svelte-1gotbf5{font-weight:bold}@media(min-width: 480px){footer.svelte-1gotbf5.svelte-1gotbf5{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1gotbf5">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="svelte-1gotbf5">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-1gotbf5"><a href="https://github.com/Lev-Stambler" class="svelte-1gotbf5">Github</a>
		<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwibxLKEyeD7AhW5GlkFHS-fAyoQFnoECBgQAQ&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Flev-stambler-888052154" class="svelte-1gotbf5">LinkedIn</a>
		<a href="mailto:lev.stambler@gmail.com" class="svelte-1gotbf5">Email Me</a></footer>
</div>`;
});
export {
  Layout as default
};
