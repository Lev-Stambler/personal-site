import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../../chunks/hooks.js";
const css = {
  code: ".wrapper.svelte-yklg28{cursor:pointer;box-sizing:border-box;border:1px black solid;padding:2rem;display:grid;grid-template-columns:60% 40%;gap:1rem}h2.svelte-yklg28{grid-column:span 2;font-size:1.3rem}img.svelte-yklg28{width:100%}",
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post = null } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `<div class="box" style="display: box;"><div class="wrapper svelte-yklg28"><h2 class="svelte-yklg28">${escape(post?.title)}</h2>
		<div>${escape(new Date(post?.date || "").toDateString())}
			<hr>
			<p><!-- HTML_TAG_START -->${post?.excerpt}<!-- HTML_TAG_END --></p></div>
		<img${add_attribute("src", post?.imgSrc, 0)} alt="" class="svelte-yklg28"></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { posts } = data;
  console.log(posts);
  let sortedPosts = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ygwq49_START -->${$$result.title = `<title>Musings</title>`, ""}<meta name="description" content="Musings"><!-- HEAD_svelte-1ygwq49_END -->`, ""}

<div class="text-column current-research"><h1>My Blog</h1>
	
	${each(sortedPosts, (post) => {
    return `${validate_component(BlogCard, "BlogCard").$$render($$result, { post }, {}, {})}
		<br>`;
  })}
</div>`;
});
export {
  Page as default
};
