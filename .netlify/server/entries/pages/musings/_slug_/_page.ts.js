import { e as error } from "../../../../chunks/index2.js";
import { a as getPostBySlug } from "../../../../chunks/index.js";
function load({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    throw error(404, `Post not found: ${params.slug}`);
  }
  return {
    page: post.component,
    ...post.metadata
  };
}
export {
  load
};
