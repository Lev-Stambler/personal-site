import { c as create_ssr_component } from "../../../chunks/hooks.js";
const css = {
  code: ".curious-page.svelte-j5shcm.svelte-j5shcm{padding-top:2rem}.curious-page.svelte-j5shcm h1.svelte-j5shcm{text-align:left}.opportunity-section.svelte-j5shcm.svelte-j5shcm,.contact-section.svelte-j5shcm.svelte-j5shcm{margin:2rem 0;padding:1.5rem;border-left:3px solid var(--color-theme-2);background:rgba(255, 255, 255, 0.3)}.opportunity-section.svelte-j5shcm h2.svelte-j5shcm,.contact-section.svelte-j5shcm h2.svelte-j5shcm{text-align:left;font-size:1.3rem;margin-bottom:0.5rem}.opportunity-section.svelte-j5shcm ul.svelte-j5shcm{padding-left:1.2rem}.opportunity-section.svelte-j5shcm li.svelte-j5shcm{padding:0.3rem 0}.back-link.svelte-j5shcm.svelte-j5shcm{margin-top:3rem;font-size:0.9rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-nxrx69_START -->${$$result.title = `<title>You Found It</title>`, ""}<meta name="robots" content="noindex"><!-- HEAD_svelte-nxrx69_END -->`, ""}

<div class="text-column curious-page svelte-j5shcm"><h1 class="svelte-j5shcm">You&#39;re curious. I like that.</h1>

	<p>If you&#39;re reading this, you probably have good attention to detail.
		That&#39;s a quality I value in collaborators.
	</p>

	<section class="opportunity-section svelte-j5shcm"><h2 class="svelte-j5shcm">Open to Opportunities</h2>
		<p>I&#39;m selectively exploring:</p>
		<ul class="svelte-j5shcm"><li class="svelte-j5shcm"><strong>AI Research Roles</strong> — Labs working on interpretability, alignment, or ML foundations</li>
			<li class="svelte-j5shcm"><strong>Technical Advisory</strong> — For AI startups and research orgs</li>
			<li class="svelte-j5shcm"><strong>Research Collaborations</strong> — Particularly at the AI-quantum intersection</li></ul></section>

	<section class="contact-section svelte-j5shcm"><h2 class="svelte-j5shcm">Let&#39;s Talk</h2>
		<p>The best way to reach me is <a href="mailto:lev.stambler@gmail.com">email</a>.
			Mention that you found the curious path — it helps filter signal from noise.
		</p></section>

	<p class="back-link svelte-j5shcm"><a href="/">← Back to the surface</a></p>
</div>`;
});
export {
  Page as default
};
