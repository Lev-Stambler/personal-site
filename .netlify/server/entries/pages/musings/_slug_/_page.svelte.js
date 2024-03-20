import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, m as missing_component } from "../../../../chunks/hooks.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { page, title } = data;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
${validate_component(page || missing_component, "svelte:component").$$render($$result, {}, {}, {})}

${$$result.head += `<!-- HEAD_svelte-ne90p9_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", title, 0)}><!-- HEAD_svelte-ne90p9_END -->`, ""}`;
});
export {
  Page as default
};
