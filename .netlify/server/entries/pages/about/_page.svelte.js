import { c as create_ssr_component } from "../../../chunks/hooks.js";
const css = {
  code: ".about-section.svelte-1p5yb2.svelte-1p5yb2{margin-bottom:2rem}.about-section.svelte-1p5yb2 h2.svelte-1p5yb2{text-align:left;font-size:1.4rem;margin-bottom:0.5rem}.about-section.svelte-1p5yb2 ul.svelte-1p5yb2{padding-left:1.2rem}.about-section.svelte-1p5yb2 li.svelte-1p5yb2{padding:0.3rem 0}.easter-egg.svelte-1p5yb2.svelte-1p5yb2{text-align:center;margin-top:3rem}.subtle-link.svelte-1p5yb2.svelte-1p5yb2{color:transparent;text-decoration:none;cursor:default;transition:color 0.3s ease;font-size:1.5rem;letter-spacing:0.3em}.subtle-link.svelte-1p5yb2.svelte-1p5yb2:hover{color:var(--color-theme-2);cursor:pointer;text-decoration:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-16vwfs6_START -->${$$result.title = `<title>About - Lev Stambler</title>`, ""}<meta name="description" content="About Lev Stambler"><!-- HEAD_svelte-16vwfs6_END -->`, ""}

<div class="text-column"><h1>About Me</h1>

	<section class="about-section svelte-1p5yb2"><p>I&#39;m a PhD student at the University of Maryland working on problems at the intersection of AI and quantum computing.
			My research combines theoretical rigor with practical applicability.
		</p>
		<p>Before grad school, I consulted for various Web3 and crypto startups on zero-knowledge proofs and secure protocols,
			and did an internship at the Ethereum Foundation working on cryptographic research.
		</p></section>

	<section class="about-section svelte-1p5yb2"><h2 class="svelte-1p5yb2">Research Philosophy</h2>
		<p>I believe the most interesting problems live at boundaries — between theory and practice, between disciplines,
			between what we can prove and what we can only conjecture.
			My work on transformer interpretability is as much about building better AI as it is about understanding computation itself.
		</p></section>

	<section class="about-section svelte-1p5yb2"><h2 class="svelte-1p5yb2">Beyond Research</h2>
		<ul class="svelte-1p5yb2"><li class="svelte-1p5yb2">I prefer tea to coffee (send conference tea break invites)</li>
			<li class="svelte-1p5yb2">I enjoy building visualizations of mathematical concepts</li>
			<li class="svelte-1p5yb2">I believe in the power of clear writing and accessible explanations</li></ul></section>

	<p class="easter-egg svelte-1p5yb2"><a href="/curious" class="subtle-link svelte-1p5yb2" title="for the curious">...</a></p>
</div>`;
});
export {
  Page as default
};
