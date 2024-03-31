import { _ as __vite_glob_0_0, a as __vite_glob_0_1 } from "../../../chunks/post-theorem-prover.js";
import { e as error } from "../../../chunks/index.js";
const imports = /* @__PURE__ */ Object.assign({ "../../lib/posts/folded-data-availability.md": __vite_glob_0_0, "../../lib/posts/post-theorem-prover.md": __vite_glob_0_1 });
const posts = [];
for (const path in imports) {
  const post = imports[path];
  if (post) {
    posts.push({
      ...post.metadata,
      ...post.default.render()
    });
  }
}
posts.filter((post) => !post.hidden).sort(
  (a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : 0
);
async function load() {
  const result = Object.keys(posts).map((index) => {
    const { slug, title, date, excerpt, tags, readingTime, imgSrc } = posts[index];
    return {
      slug,
      imgSrc,
      title,
      date,
      excerpt,
      tags,
      readingTime
    };
  });
  if (result) {
    return {
      posts: result
    };
  }
  throw error(500, `Could not load blog posts`);
}
export {
  load
};
