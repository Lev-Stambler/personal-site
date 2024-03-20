import { c as create_ssr_component } from "./hooks.js";
const metadata = {
  "slug": "theorem-proving",
  "title": "Theorem Proving's Potential",
  "date": "2022-12-04T00:00:00.000Z",
  "excerpt": "Embedding spaces and AI, learning, and unifying programming and proving. Why I'm excited for theorem proving.",
  "tags": ["Theorem Proving"],
  "imgSrc": "/blog/lean-scratch.png"
};
const Post_theorem_prover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Theorem Proving and Why I’m Excited</h1>
<p>I am relatively new to research and am even more noobish when it comes to theorem proving. Still, I am excited. After going through basic Lean tutorials, the <a href="https://www.ma.imperial.ac.uk/~buzzard/xena/natural_number_game/" rel="nofollow">Natural Number Game</a>, and most of Kevin Buzzard’s class, <a href="https://github.com/ImperialCollegeLondon/formalising-mathematics" rel="nofollow">Formalizing Mathematics</a>, I am starting to warm up to Lean but cannot quite imagine wide adoption of Lean.
Still, theorem proving has captured my imagination.</p>
<center><figure style="width: min-content"><img src="/blog/lean-scratch.png" width="400">
	<figcaption style="text-align: center;">Stable Diffusion: &quot;A pencil sketch of a programmer coding math&quot;</figcaption></figure></center>
<h2>Embedding Spaces and AI</h2>
<p>Language models are all the rage today and rightfully so. Transformer based architectures have given us the likes of GPT-3, CodeBERT, and even better LDPC code decoders. Preliminary searching shows that many researchers also attempted to train language models on the broad swath of papers on Arxiv. Though we have models which can solve math olympiad questions, none (to my knowledge) are able to handle the widely varying notation of math and computer science. A <a href="https://arxiv.org/pdf/2102.06203.pdf" rel="nofollow">recent paper</a> though shows that a language model is somewhat able to understand Lean.</p>
<p>Here is my hope: <strong>a good search engine for math and computer science</strong>. If papers attached a formalized (with Lean) statement of their main theorems and lemmas, then one could hypothetically have something akin to semantic search for theorems. Note that this would not require researchers to <em>prove</em> anything in Lean.</p>
<h2>Learning!</h2>
<p>Kevin Buzzard’s class, <a href="https://github.com/ImperialCollegeLondon/formalising-mathematics" rel="nofollow">Formalizing Mathematics</a>, is a great example of this. Though I had previous familiarity with some of the subjects being covered, I could imagine Lean being a fantastic way to learn math, especially for self-studying types of learning. Most importantly, the learner has immediate feedback: they know when there problem set responses are correct or not. For anyone who self studied math/ C.S., they know the struggle of trying to figure out when to check answer sheets to confirm uncertain answers to questions.</p>
<h2>It’s Programming but for Proofs</h2>
<p>This point is more personal. I feel right at home programming. In a very real sense, I “grew up” programming. Though I am becoming increasingly comfortable with mathematics and proofs, coding feels as easy as speaking a language --- creating proofs not so much. Don’t get me wrong, I do not write Lean with the same ease as JavaScript. Still, Lean has a comfortable familiarity.</p>
<p>I imagine that many today have a similar background to myself. Programming and coding is more accessible to 10-18 year olds than higher level maths. After all, Python has a lower barrier of entry than Algebraic Geometry.</p>
<h2>Concluding Thoughts</h2>
<p>Do I think something like Lean, Coq, or Isabelle will be massively adopted anytime soon? Not really. But, I do not see why adoption must be binary. Theorem proving is a fantastic tool which can be gradually introduced. Researchers, for example, could adopt attaching formal theorem statements and constructivist math classes could be taught with theorem provers.</p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Post_theorem_prover,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
