import { c as create_ssr_component, a as add_attribute } from "../../chunks/hooks.js";
const turtle = "/_app/immutable/assets/turtle-good-BPRFysig.png";
const css = {
  code: "section.svelte-14e2vdj.svelte-14e2vdj{width:100%;display:grid;justify-content:center;align-items:center;gap:1rem;grid-template-columns:1fr 1fr 1fr;grid-template-rows:repeat(2, auto)}.right.svelte-14e2vdj.svelte-14e2vdj{width:100%;padding-left:10rem;height:auto;justify-self:center;grid-row:span 2;grid-column:span 2}.left.svelte-14e2vdj.svelte-14e2vdj{align-self:baseline;grid-row:span 2;justify-self:start}.left.svelte-14e2vdj ul li.svelte-14e2vdj{padding:0.2rem 0;list-style:katakana}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-w00biy_START -->${$$result.title = `<title>Lev Stambler</title>`, ""}<meta name="description" content="Lev Stambler's Personal Site"><!-- HEAD_svelte-w00biy_END -->`, ""}

<section style="max-width: 64rem; margin: 0 auto;" class="svelte-14e2vdj"><div class="left svelte-14e2vdj"><h1 style="text-align: left;">Hello!</h1>
		<p>My name is Lev. I am a PhD student in the University of Maryland&#39;s Computer Science Department.
			<br>
			<br>
			I like to be brief:
		</p>
		<ul><li class="svelte-14e2vdj">I like to learn</li>
			<li class="svelte-14e2vdj">I like to code</li>
			<li class="svelte-14e2vdj">I find math and theoretical computer science quite fun</li>
			<li class="svelte-14e2vdj">I like tea *</li></ul></div>
	<div class="right svelte-14e2vdj"><a href="https://github.com/Lev-Stambler/3D-Turtles" target="blank" label="3D Turtles and Exploration"><img${add_attribute("src", turtle, 0)} alt="Welcome"></a>
		<p>The above picture is from a project which explores &quot;drawing&quot; rational numbers in
			different dimensions
		</p></div>
</section>`;
});
export {
  Page as default
};
