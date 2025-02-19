#import "@preview/ctheorems:1.1.3" : *
#import emoji  : checkmark
#show: thmrules.with(qed-symbol: [#checkmark.box])

#set page(width: 16cm, height: auto, margin: 1.5cm)
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


Though in this quick post, we will be discussing, *exponentially sized* sets, we will get a really interesting and _unexpected_ result about a very common class of functions!


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

= Some Maybe Interesting Questions
+ If $f$ is some polynomial time computable function, can we find a set $S$ with $|S| >= k$ such that $f(a, b) != y$ for all $a, b in S$? How much time would it take to find such a set? Can we do better than exponential time?
+ As someone interested in cryptography, I wonder if this lemma has any implications for symmetric functions used in cryptography. For example, can we use this lemma to find a set of keys that are not related to each other in some way?
