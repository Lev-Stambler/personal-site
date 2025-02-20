#import "commands/main_commands.typ" : *
#import "@preview/ctheorems:1.1.3" : *
#import emoji  : checkmark
#show: thmrules.with(qed-symbol: [#checkmark.box])

#set page(width: 800pt, height: auto, margin: 1.5cm)
#set heading(numbering: none)

#let theorem = thmbox("theorem", "Theorem", fill: rgb("#eeffee")).with(numbering: none)
#let corollary = thmplain(
  "corollary",
  "Corollary",
  base: "theorem",
  titlefmt: strong
).with(numbering: none)
#let definition = thmbox("definition", "Definition", inset: (x: 1.2em, top: 1em)).with(numbering: none)

#let example = thmplain("example", "Example").with(numbering: none)
#let proof = thmproof("proof", "Proof")
#let calX = $cal(X)$
#let calY = $cal(Y)$
#let calS = $cal(S)$


= A Cute Lemma from Ramsey Theory
Ramsey theory is a branch of combinatorics with many surprisings results.
For the most part, we normally think of Ramsey theory as a field that deals with extremally large sets, if not infinite sets.
As a computer scientist (in training), I tend to be interested in a very specific class of functions though: specifically functions of the form $f: X -> Y$ where $X, Y$ are _discrete_ and _finite_ sets.
For example, ${0, 1}^n -> {0, 1}$ is a function that takes in a binary string of length $n$ and outputs a single bit.

In this quick post, we will be discussing, *exponentially sized* sets, we will get a really interesting and _unexpected_ result about a very common class of functions!

#LLMExplains(name: "Anthropic's Claude", title: "Ramsey Theory to a college student")[
Ramsey theory, at its core, studies the emergence of order in seemingly chaotic structures. Think of it like this: if you have a large enough collection of objects and some way of relating them (like coloring them, pairing them, etc.), you're guaranteed to find some patterns or structures within that collection.

A classic example is the "party problem": if you have 6 people at a party, there must be either 3 people who all know each other or 3 people who are all strangers to each other. This might seem surprising at first, but it's a fundamental result in Ramsey theory!

The field gets its name from Frank P. Ramsey, who proved that in any large enough structure, you can always find well-organized substructures. For instance, if you color the edges of a large enough complete graph with a finite number of colors, you'll always find a complete subgraph whose edges are all the same color.

What makes Ramsey theory fascinating is that it often deals with the question "How large is large enough?" The answers are usually surprisingly big – we might need exponentially or even astronomically large structures to guarantee the existence of relatively small ordered substructures.
]


== The Class of Functions $F(x, y)$
Let $X, Y$ be finite sets with $|X| >= 2^(k + 2)$ and $|Y| >= 3$.
We will let $F : X times X -> Y$ be an arbitrary function as long as $F(x, y) = F(y, x)$ for all $x, y in X$.
We call these class of functions _symmetric_ functions. (TODO: check this?)

#definition[Symmetric Function][
A function $F : X times X -> Y$ is called _symmetric_ if $F(x, y) = F(y, x)$ for all $x, y in X$.
]


#heading([Cute Little Lemma for $F(x, y)$])

#theorem[
	For all $F : calX times calX -> calY$ where $F$ is a symmetric function and $|calX| >= 2^(k + 2), |calY| >= 3$, there exists a set $calS subset.eq calX$ with $|S| >= k$ and $y in Y$ such that $F(a, b) != y $ for all $a, b in calS$.
]
#proof[
	The proof follows from a simple application of Ramsey's theorem for finite sets.
	First, lets assign some index $id(y) in {1, dots, |calY|}$ for each $y in calY$.
	Then, let $
	cal(H)_b = {x : x in calX, id(F(x, x)) mod 3}
	$
	and let $
	cal(H)_("maj") = arg max_(cal(H)_b) |cal(H)_b|.
	$
	I.e., $cal(H)_("maj")$ is the set of elements in $calX$ that are mapped to $y$ the most number of times.
	Then, $cal(H)_("maj")$ is a set of size at least $(|calX|) / 3$.


	We can then think of a graph $G$ with vertices $cal(H)_"maj"$ and an edge between $(a, b) in cal(H)_"maj"$ with the following coloring for edges $a != b$ and $a < b$:
	$
		"COL"(a, b) =id(F(a, b)) mod 3.
	$
	We can then use Ramsey's theorem to find a monochromatic set $calS subset.eq cal(H)_"maj"$ with $|calS| >= k$ for $k >= 0.5 log_2(frac(|calX|, 3))$ and color $c$
	So, what this means is that $F(a, b) mod 3 = c$ for all $a, b in calS$ with $a < b$ for some $y in calY$.
	But notice that $F(a, b) = F(b, a)$ for all $a, b in calX$ and so $F(a, b) = F(b, a) = id(y) mod 3$ for all $a, b in calS$ where $a != b$!
	Finally, this means that $
	c = F(a, b) mod 3 " or "b = F(a, b) mod 3 
	$
	as if $a != b$, the the homogeneous edge $(a, b)$ is colored with $c$.
	If $a = b$, then $F(a, b) mod 3= b $ by definition of $cal(H)_"maj"$!
]

= Strange, isn't it?
At first glance, this lemma may not seem to strange.
If we look closer though, we see that this lemma is actually quite surprising!
Many every day functions, such as the Diffie-Hellman key exchange, are symmetric functions with an exponentially sized domain, in particular, this means that the lemma applies to them!

So what does this mean for us?
I am not entirely sure, but I think it is a good reminder that even the most simple functions can have some very interesting properties!

#LLMExplains(name: "Anthropic's Claude", title: "why this is cool")[
Let me break down why this result is surprisingly powerful and counterintuitive:

Imagine you have a function that takes two inputs and gives one output, like multiplication or addition. You'd expect that if you look at enough input pairs, you'd eventually see all possible outputs, right? This lemma says something shocking - no matter how clever your function is, if you have enough inputs (exponentially many), you can always find a large set of numbers where some output value *never appears* when you pair them up!

Think about multiplication mod 3: even with just the numbers 1-10, it seems like you get all possible remainders (0,1,2) when multiplying different pairs. The lemma says that with a big enough set of numbers, you can find a subset where one remainder *never shows up* when you multiply any two numbers from that subset.

This is especially surprising for cryptographic functions, which are designed to have outputs that look random and unpredictable. The lemma says that even these "random-looking" functions must have large structured subsets where some output value never appears.

What makes this even more mind-bending is that it works for *any* symmetric function - you don't need to know anything about how the function works internally. Just the fact that it's symmetric (f(x,y) = f(y,x)) and has a large enough input set is enough to guarantee this property exists!

]

= Some Maybe Interesting Questions
+ If $f$ is some polynomial time computable function, can we find a set $S$ with $|S| >= k$ such that $f(a, b) != y$ for all $a, b in S$? How much time would it take to find such a set? Can we do better than exponential time?
+ As someone interested in cryptography, I wonder if this lemma has any implications for symmetric functions used in cryptography. For example, can we use this lemma to find a set of keys that are not related to each other in some way? Or can does this lemma provide some insight into the security of symmetric functions?
