import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2 } from "../../../../chunks/ramsey-theory-is-fun.js";
const allPosts = /* @__PURE__ */ Object.assign({ "../../../lib/posts/folded-data-availability.md": __vite_glob_0_0, "../../../lib/posts/post-theorem-prover.md": __vite_glob_0_1, "../../../lib/posts/ramsey-theory-is-fun.md": __vite_glob_0_2 });
let posts = [];
for (let path in allPosts) {
  const post = allPosts[path];
  const slug = post.metadata.slug;
  const p = { post, slug, metadata: post.metadata };
  posts.push(p);
}
function load({ params }) {
  const { slug } = params;
  const filteredPost = posts.find((p) => {
    return p.slug.toLowerCase() === slug.toLowerCase();
  });
  return {
    // Tell page to load that post's module
    page: filteredPost.post.default,
    ...filteredPost.metadata
  };
}
export {
  load
};
