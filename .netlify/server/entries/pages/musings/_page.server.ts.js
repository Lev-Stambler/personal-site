import { _ as __vite_glob_0_0, a as __vite_glob_0_1, b as __vite_glob_0_2 } from "../../../chunks/ramsey-theory-is-fun.js";
import { e as error } from "../../../chunks/index.js";
const imports = /* @__PURE__ */ Object.assign({ "../../lib/posts/folded-data-availability.md": __vite_glob_0_0, "../../lib/posts/post-theorem-prover.md": __vite_glob_0_1, "../../lib/posts/ramsey-theory-is-fun.md": __vite_glob_0_2 });
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
