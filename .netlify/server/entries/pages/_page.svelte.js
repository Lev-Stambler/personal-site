import { c as create_ssr_component, a as add_attribute } from "../../chunks/hooks.js";
const turtle = "/_app/immutable/assets/turtle-good-BPRFysig.png";
const css = {
  code: "section.svelte-14e2vdj.svelte-14e2vdj{width:100%;display:grid;justify-content:center;align-items:center;gap:1rem;grid-template-columns:1fr 1fr 1fr;grid-template-rows:repeat(2, auto)}.right.svelte-14e2vdj.svelte-14e2vdj{width:100%;padding-left:10rem;height:auto;justify-self:center;grid-row:span 2;grid-column:span 2}.left.svelte-14e2vdj.svelte-14e2vdj{align-self:baseline;grid-row:span 2;justify-self:start}.left.svelte-14e2vdj ul li.svelte-14e2vdj{padding:0.2rem 0;list-style:katakana}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-6oqgdm_START -->${$$result.title = `<title>Lev Stambler</title>`, ""}<meta name="description" content="Lev Stambler - Quantum Computing and AI Researcher"><!-- HEAD_svelte-6oqgdm_END -->`, ""}

<section style="max-width: 64rem; margin: 0 auto;" class="svelte-14e2vdj"><div class="left svelte-14e2vdj"><h1 style="text-align: left;">Hello!</h1>
		<p>I&#39;m Lev, a PhD student at UMD researching at the intersection of
			<span class="highlight">quantum computing</span> and <span class="highlight">AI</span>.
		</p>
		<p style="margin-top: 1rem;">My work spans:</p>
		<ul><li class="svelte-14e2vdj"><strong>AI Safety &amp; Interpretability</strong> — Understanding what neural networks actually learn</li>
			<li class="svelte-14e2vdj"><strong>ML Theory</strong> — Formal proofs for transformer behavior</li>
			<li class="svelte-14e2vdj"><strong>Quantum Cryptography</strong> — Security under realistic adversary models</li>
			<li class="svelte-14e2vdj"><strong>Applied AI</strong> — Building systems that work</li>
			<li class="svelte-14e2vdj">I like tea *</li></ul></div>
	<div class="right svelte-14e2vdj"><a href="https://github.com/Lev-Stambler/3D-Turtles" target="blank" label="3D Turtles and Exploration"><img${add_attribute("src", turtle, 0)} alt="3D Turtles visualization"></a>
		<p>Where theory meets creative exploration</p></div>
</section>`;
});
export {
  Page as default
};
