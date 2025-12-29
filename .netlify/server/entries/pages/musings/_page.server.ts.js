import { g as getAllPosts } from "../../../chunks/index.js";
function load() {
  return {
    posts: getAllPosts()
  };
}
export {
  load
};
