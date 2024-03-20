import { c as create_ssr_component } from "../../../chunks/hooks.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-sqexav_START -->${$$result.title = `<title>About Me</title>`, ""}<meta name="description" content="About Me"><!-- HEAD_svelte-sqexav_END -->`, ""}

<div class="text-column"><h1>Who is Lev?</h1>

	<p>Lev is a cool dude
	</p></div>`;
});
export {
  Page as default
};
