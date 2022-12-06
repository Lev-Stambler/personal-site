---
slug: theorem-proving
title: Theorem Proving's Potential 
date: 2022-12-04
excerpt: "Embedding Space and AI, learning, and unifying programming and proving. Why I'm excited for theorem proving"
tags: [Theorem Proving]
imgSrc: /blog/lean-scratch.png
---

# Theorem Proving and Why I'm Excited
I am relatively new to research and am even more noobish when it comes to theorem proving. Still, I am excited. After going through basic Lean tutorials, the [Natural Number Game](https://www.ma.imperial.ac.uk/~buzzard/xena/natural_number_game/), and most of Kevin Buzzard's class, [Formalizing Mathematics](https://github.com/ImperialCollegeLondon/formalising-mathematics), I am starting to warm up to Lean but cannot quite imagine wide adoption of Lean. 
Still, theorem proving has captured my imagination.


<center>
	<figure style="width: min-content">
	<img src="/blog/lean-scratch.png" width="400">
	<figcaption style="text-align: center;">Stable Diffusion: "A pencil sketch of a programmer coding math"</figcaption>
	</figure>
</center>


## Embedding Spaces and AI
Language models are all the rage today and rightfully so. Transformer based architectures have given us the likes of GPT-3, CodeBERT, and even better LDPC code decoders. Preliminary searching shows that many researchers also attempted to train language models on the broad swath of papers on Arxiv. Though we have models which can solve math olympiad questions, none (to my knowledge) are able to handle the widely varying notation of math and computer science. A [recent paper](https://arxiv.org/pdf/2102.06203.pdf) though shows that a language model is somewhat able to understand Lean.

Here is my hope: **a good search engine for math and computer science**. If papers attached a formalized (with Lean) statement of their main theorems and lemmas, then one could hypothetically have something akin to semantic search for theorems. Note that this would not require researchers to _prove_ anything in Lean.

## Learning!
Kevin Buzzard's class, [Formalizing Mathematics](https://github.com/ImperialCollegeLondon/formalising-mathematics), is a great example of this. Though I had previous familiarity with some of the subjects being covered, I could imagine Lean being a fantastic way to learn math, especially for self-studying types of learning. Most importantly, the learner has immediate feedback: they know when there problem set responses are correct or not. For anyone who self studied math/ C.S., they know the struggle of trying to figure out when to check answer sheets to confirm uncertain answers to questions.


## It's Programming but for Proofs
This point is more personal. I feel right at home programming. In a very real sense, I "grew up" programming. Though I am becoming increasingly comfortable with mathematics and proofs, coding feels as easy as speaking a language --- creating proofs not so much. Don't get me wrong, I do not write Lean with the same ease as JavaScript. Still, Lean has a comfortable familiarity.

I imagine that many today have a similar background to myself. Programming and coding is more accessible to 10-18 year olds than higher level maths. After all, Python has a lower barrier of entry than Algebraic Geometry.

## Concluding Thoughts
Do I think something like Lean, Coq, or Isabelle will be massively adopted anytime soon? Not really. But, I do not see why adoption must be binary. Theorem proving is a fantastic tool which can be gradually introduced. Researchers, for example, could adopt attaching formal theorem statements and constructivist math classes could be taught with theorem provers.