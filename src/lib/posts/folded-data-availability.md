---
slug: folding-data-available
title: Folding for Data Availability; Fun for All Sizes
date: 2024-03-26
excerpt: 'In this post, we will explore a new technique for generating data availability proofs, primarily leveraging cryptographic folding and the Blake3 hash function.'
tags: [Cryptography, Blockchain, Distributed Systems]
imgSrc: /blog/warrant.webp
---

<style>
	h2 {
		text-align: left;
	}
	details {
		/* border: black 1px solid; padding: 1rem; */
		padding: 1rem;
		background-color: #fff0dd;
	}

	li {
		padding: 0.4rem;
	}

</style>

# Folding for Data Availability: Fun for All Sizes

Data availability proofs are pivotal in distributed systems, particularly in blockchains, where they authenticate data blobs and prove data storage. While Filecoin, Ethereum light clients, and rollups all rely on these proofs, current solutions often fall short. 

Existing solutions often employ variants of Merkle trees or variants, such as Verkle trees. Much work has been done to improve the practicallity of data-availability solutions at scale. Still, current solutions for large files often suffer from one of the following issues:

- The proofs are large
- To make the proofs smaller, expensive and slow techniques are employed (I.e. using a SNARK to prove the tree path)
- To make the compression techniques less expensive, newer, algebriac hash function are used. These hash function have not stood the test of time (i.e. the Poisiden hash function)

So, can we get around these issues? Would it be possible to use a compression technique without using an algebriac hash function? The answer seems to be yes!

In this post, we will explore a new technique for generating data availability proofs, primarily leveraging cryptographic folding and the Blake3 hash function.

## A Brief Introduction

At a high level, the Blake3 hash function has an in-built Merkle-tree like mechanism to produce a hash of a large amount of data. So, to produce a data-availability proof, we simply need to generate a proof of knowledge from a random leaf to the root. For anyone familiar with Merkle trees, producing a proof requires verifying $O( \log N)$ hashes where $N$ is the number of leaves in the tree. Even though the scaling is relatively efficient, there is still a significant overhead in terms of number of constraints in real-world proving systems.

However, the folding technique can allows us to quickly generate proofs _in parallel_ for individual hash verifications in the tree and then combine them to produce the final proof. Unfortunately, at the time of writing this post, the parallelism in the folding technique is not yet implemented in the proof systems. Nontheless, folding allows for simpler circuits for proving.

## Data Availability Proofs at a Glance

Data availability proofs are a crucial component of distributed systems. They are used to ensure that data is available to all participants in the system. In the context of blockchains, data availability proofs are used to ensure that all participants have access to the data that is being stored on the blockchain.

Though there are multiple ways to instantiate data availablity proofs, we will focus in on Merkle-tree based approaches. In a Merkle tree, data is stored in the leaves of the tree each inner node's value is the hash of its children. By the magic of collision resistance and cryptography, we can expect that any party which can provide a _valid_ path from a leaf to the root of the tree must be providing the _originally_ hashed data. In other words, it is (cryptographically) impossible to cheat and come up with a path which yields the same root hash but is not the original data.

<center>
<p>
<!-- ![](/blog/folded-data-avail/merkletree.png) -->
<!-- <img src="/blog/folded-data-avail/merkletree.png" alt="A simple picture of a Merkle tree." style="width: min(1000px, 80%);"/> -->
<!-- https://q.uiver.app/#q=WzAsMTUsWzIsMywiTF8wIl0sWzQsMywiTF8xIl0sWzYsMywiTF8yIl0sWzgsMywiTF80Il0sWzIsMiwiSChMXzApIl0sWzQsMiwiSChMXzEpIl0sWzYsMiwiSChMXzIpIl0sWzgsMiwiSChMXzMpIl0sWzAsMywiXFx0ZXh0e1xcdGV4dGJme0RhdGEgYmxvY2tzfX0iXSxbMCwyLCJcXHRleHR7XFx0ZXh0YmZ7TGF5ZXIgMn19Il0sWzAsMSwiXFx0ZXh0e1xcdGV4dGJme0xheWVyIDF9fSJdLFswLDAsIlxcdGV4dHtcXHRleHRiZntSb290fX0iXSxbMywxLCJcXHRleHR0dHtOb2RlfV8wID0gSChMXzAgXFxtaWQgXFxtaWQgTF8xKSJdLFs3LDEsIlxcdGV4dHR0e05vZGV9XzEgPSBIKExfMCBcXG1pZCBcXG1pZCBMXzEpIl0sWzUsMCwiSChcXHRleHR0dHtOb2RlfV8wIFxcbWlkIFxcbWlkIFxcdGV4dHR0e05vZGV9XzEpIl0sWzAsNF0sWzEsNV0sWzIsNl0sWzMsN10sWzQsMTJdLFs1LDEyXSxbMTIsMTRdLFs2LDEzXSxbNywxM10sWzEzLDE0XV0= -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMTUsWzIsMywiTF8wIl0sWzQsMywiTF8xIl0sWzYsMywiTF8yIl0sWzgsMywiTF80Il0sWzIsMiwiSChMXzApIl0sWzQsMiwiSChMXzEpIl0sWzYsMiwiSChMXzIpIl0sWzgsMiwiSChMXzMpIl0sWzAsMywiXFx0ZXh0e1xcdGV4dGJme0RhdGEgYmxvY2tzfX0iXSxbMCwyLCJcXHRleHR7XFx0ZXh0YmZ7TGF5ZXIgMn19Il0sWzAsMSwiXFx0ZXh0e1xcdGV4dGJme0xheWVyIDF9fSJdLFswLDAsIlxcdGV4dHtcXHRleHRiZntSb290fX0iXSxbMywxLCJcXHRleHR0dHtOb2RlfV8wID0gSChMXzAgXFxtaWQgXFxtaWQgTF8xKSJdLFs3LDEsIlxcdGV4dHR0e05vZGV9XzEgPSBIKExfMCBcXG1pZCBcXG1pZCBMXzEpIl0sWzUsMCwiSChcXHRleHR0dHtOb2RlfV8wIFxcbWlkIFxcbWlkIFxcdGV4dHR0e05vZGV9XzEpIl0sWzAsNF0sWzEsNV0sWzIsNl0sWzMsN10sWzQsMTJdLFs1LDEyXSxbMTIsMTRdLFs2LDEzXSxbNywxM10sWzEzLDE0XV0=&embed" width="2018" height="560" style="border-radius: 8px; border: none; zoom: 0.55; margin-left: -12rem;"></iframe>
<br />
<em>
	A picture of a Merkle tree where H is the hash function. For a data availability proof with 4 blocks of data, the data is stored in the leaves. <br />
	As always, <a href="https://en.wikipedia.org/wiki/Merkle_tree">Wikipedia</a> is a great resource for learning more about Merkle trees.
</em>

</p>
</center>

But what now? We do not get a data-availability scheme by simply having a Merkle tree. Indeed, imagine that for Bob to prove to Alice that he has the data, he must provide any path from the leaf to the root. Bob can then simply store the path from one leaf to the root and throw out the remaining data. Bob can then provide the path to Alice and Alice will be none the wiser.

Instead, we need Alice to leverage randomness. Now, Alice can ask Bob to provide a path from a _random_ leaf to the root. Bob cannot simply store the path from one leaf to the root and throw out the remaining data. If he does this, he will be caught out when Alice asks for a path from a different leaf to the root. Bob must store all the paths from all the leaves to the root.

## Folding at a Glance

<!-- Remark: Check out this [great blog post](https://blog.zk.link/nova-studies-i-exploring-aggregation-recursion-and-folding-23b9a67000cd) for an introduction to folding. -->

For simplicity, we will think about SNARKS without the ZK part (i.e. they do not preserve secrecy). In general, a SNARK can be thought of as consisting of a witness (which we will refer to as $$W$$), a public input, $I$, a public output, $O$, and a circuit $C$. Though often not framed in these terms, we can think of a SNARK as a proof that the circuit $C$ with inputs $(W, I)$ returns back the public output $O$.

For our purposes, we can think of folding as doing a sort of _iteration_ over a circuit. We will iterate the circuit for a number of rounds, $r$, and at each round, we update some running proof state. For round $i$, the update will prove that given the output from the last run, $O_{i - 1}$ and witness $W_i$, then $C(W_i, O_{i - 1}) = O_i$. Moreover, this proof will be "combined" with the proof from the previous round to produce a new proof for the current round.

In other words, we have that after round $i$, the current proof proves that $C(W_i, C(W_{i - 1}, C(W_{i - 2}, \ldots C(W_0, I_0) \ldots ))) = O_i$.
The magic of folding is that each round's proof can be produced in parallel and then combined to produce the final proof. (TODO: source)

<center>

<div id="wrap">
<!-- https://q.uiver.app/#q=WzAsNyxbMSwxLCJcXG1hdGhiZntDfSJdLFszLDEsIlxcbWF0aGJme0N9Il0sWzIsMiwiXFxwaV8wIFxcdGV4dHsgZm9yIH0gQyhXXzAsIElfMCkgPSBPXzAiXSxbNCwyLCJcXHBpXzEgXFx0ZXh0eyBmb3IgfSBDKFdfMSwgQyhXXzAsIElfMCkpID0gT18wIl0sWzEsMCwiV18wIl0sWzMsMCwiV18xIl0sWzAsMSwiSV8wIl0sWzAsMSwiT18wLyBJXzEiXSxbMCwyLCIiLDIseyJjdXJ2ZSI6LTF9XSxbNCwwXSxbMSwzLCIiLDIseyJjdXJ2ZSI6LTF9XSxbNSwxXSxbNiwwXV0= -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNyxbMSwxLCJcXG1hdGhiZntDfSJdLFszLDEsIlxcbWF0aGJme0N9Il0sWzIsMiwiXFxwaV8wIFxcdGV4dHsgZm9yIH0gQyhXXzAsIElfMCkgPSBPXzAiXSxbNCwyLCJcXHBpXzEgXFx0ZXh0eyBmb3IgfSBDKFdfMSwgQyhXXzAsIElfMCkpID0gT18wIl0sWzEsMCwiV18wIl0sWzMsMCwiV18xIl0sWzAsMSwiSV8wIl0sWzAsMSwiT18wLyBJXzEiXSxbMCwyLCIiLDIseyJjdXJ2ZSI6LTF9XSxbNCwwXSxbMSwzLCIiLDIseyJjdXJ2ZSI6LTF9XSxbNSwxXSxbNiwwXV0=&embed" width="1254" height="432" style="border-radius: 8px; border: none; zoom: 0.75"></iframe>
<br />
<em>
	A diagram of the folding process. The circuit, C, is run sequentially for each round and the proofs are combined to produce the final proof.
</em>

</div>
</center>
<br />

# Blake3

The [Blake3 hash function](https://github.com/BLAKE3-team/BLAKE3) is surprisingly suited for folding. Not only does it use a Merkle-tree like structure to hash large amounts of data, but the inner-workings of the hash function can be broken up for folding in a natural way.

The Blake3 hash function's design is a variation on the Blake2 hash function. It is designed to be fast and secure and is based off of one core building block: **the compression function**.

<details style="">
<!-- TODO: check this -->
  <summary>A Note on Definitions for the Compression Function</summary>
	<br />
	Technically, the compression function in Blake3 is not the thing that I am calling a compression function here. The function that I am referring to simply runs the compression function multiple times (8 in the case of Blake3). The number of rounds is a parameter of the hash function and can be adjusted to trade off between speed and security. See the <a href="https://en.wikipedia.org/wiki/Block_cipher#Iterated_block_ciphers">Wikipedia page on block ciphers</a> for more information.
</details>

The compression function can be thought of as a function which takes in a $512$-bit state, a $256$ bit key, and some metadata. The function then produces a $256$-bit, hard to invert state.
The hash function itself is built up by chaining together multiple compression functions in various ways.

First, the data is split up into blocks of $1024$ bytes (or $8192$ bits). Each block is then processed _sequentially_ by splitting the block into $256$-bit chunks and then feeding them into the compression function. The first chunk uses a fixed bit key. Then, for all other chunks, the bit key is set to the prior chunk's output.
The last chunk's output is the hash of the entire block.

<center>

<!-- https://q.uiver.app/#q=WzAsOSxbMSwxLCJGIl0sWzMsMSwiRiJdLFs1LDEsIlxcZG90cyJdLFsxLDAsIm1fMCJdLFszLDAsIm1fMSJdLFswLDEsIlxcdGV4dHtGaXhlZCBjb25zdGFudH0iXSxbNywxLCJGIl0sWzcsMCwibV97MTV9Il0sWzksMSwiXFx0ZXh0e091dHB1dCBvZiBibG9ja30iXSxbMCwxXSxbMSwyXSxbMywwXSxbNCwxXSxbNSwwXSxbMiw2XSxbNyw2XSxbNiw4XV0= -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsOSxbMSwxLCJGIl0sWzMsMSwiRiJdLFs1LDEsIlxcZG90cyJdLFsxLDAsIm1fMCJdLFszLDAsIm1fMSJdLFswLDEsIlxcdGV4dHtGaXhlZCBjb25zdGFudH0iXSxbNywxLCJGIl0sWzcsMCwibV97MTV9Il0sWzksMSwiXFx0ZXh0e091dHB1dCBvZiBibG9ja30iXSxbMCwxXSxbMSwyXSxbMywwXSxbNCwxXSxbNSwwXSxbMiw2XSxbNyw2XSxbNiw4XV0=&embed" width="1617" height="304" style="border-radius: 8px; border: none; zoom: 0.7; margin-left: -5rem"></iframe>

<em>
	A diagram of how Blake3 hashes a block of data. Here F is the "compression function" and m is the 1024 byte block of data split up into 16 chunks.
</center>

All the blocks are then hashed together in a tree-like structure to produce the final hash. The "hash function" here is the compression function.
We then get a hash algorithm which looks something like the following diagram:
<center>
<!-- https://q.uiver.app/#q=WzAsNyxbMCw0LCJcXHRleHR7QmxvY2t9XzAiXSxbMiwyLCJUXzAgPSBGKFxcdGV4dHtCbG9ja31fMCBcXG1pZCBcXG1pZCBcXHRleHR7QmxvY2t9XzEpIl0sWzMsNCwiXFx0ZXh0e0Jsb2NrfV8xIl0sWzUsNCwiXFx0ZXh0e0Jsb2NrfV8yIl0sWzYsMiwiVF8xID0gRihcXHRleHR7QmxvY2t9XzAgXFxtaWQgXFxtaWQgXFx0ZXh0e0Jsb2NrfV8xKSJdLFs3LDQsIlxcdGV4dHtCbG9ja31fMyJdLFs0LDAsIkgoXFx0ZXh0e2RhdGF9KSA9IEYoVF8wIFxcbWlkIFxcbWlkIFRfMSkiXSxbMCwxXSxbMiwxXSxbMyw0XSxbNSw0XSxbMSw2XSxbNCw2XV0= -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNyxbMCw0LCJcXHRleHR7QmxvY2t9XzAiXSxbMiwyLCJUXzAgPSBGKFxcdGV4dHtCbG9ja31fMCBcXG1pZCBcXG1pZCBcXHRleHR7QmxvY2t9XzEpIl0sWzMsNCwiXFx0ZXh0e0Jsb2NrfV8xIl0sWzUsNCwiXFx0ZXh0e0Jsb2NrfV8yIl0sWzYsMiwiVF8xID0gRihcXHRleHR7QmxvY2t9XzAgXFxtaWQgXFxtaWQgXFx0ZXh0e0Jsb2NrfV8xKSJdLFs3LDQsIlxcdGV4dHtCbG9ja31fMyJdLFs0LDAsIkgoXFx0ZXh0e2RhdGF9KSA9IEYoVF8wIFxcbWlkIFxcbWlkIFRfMSkiXSxbMCwxXSxbMiwxXSxbMyw0XSxbNSw0XSxbMSw2XSxbNCw2XV0=&embed" width="1960" height="688" style="border-radius: 8px; border: none; zoom: 0.6; margin-left:-6rem"></iframe>
<em>Here H(data) is the output of the <b>Blake3 hash function on the data</b>. Block0, Block1, etc. are the outputs of the compression function on a block of data as in the previous diagram.</em>
</center>

# Putting it All Together

Now we are cooking 🍳! We have review all the building blocks of how to do data-availability with folding. The idea is that our circuit is going to be the "compression function" of Blake3 as well as some extra logic to handle whether we are chaining together compression functions (as when hashing 1 block) or hashing multiple blocks together into a tree.

The _initial_ public input is going to be the index of the block for which we want to prove membership. Assuming that the data block takes up the full $1024$ bytes,
we will have approximately $16 + D$ rounds of folding where $D = \log_2(\text{number of blocks})$.
For the first 16 rounds, the prover shows knowledge of the block. I.e. the proof verifies that $H(\text{block}) = \text{hash}$ where $H$ is the hash function and $\text{hash}$ is the hash of the block. For the remaining $D$ rounds, the prover shows knowledge of a Merkle path from the block to the root of the tree.

#### The First $16$ Rounds
Notice anything similiar about the two diagrams bellow? (The first is the diagram we used to explain folding and the second for the Blake3 hash function for one block)
<center>
<div>
<br />
<br />
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsOSxbMSwxLCJGIl0sWzMsMSwiRiJdLFs1LDEsIlxcZG90cyJdLFsxLDAsIm1fMCJdLFszLDAsIm1fMSJdLFswLDEsIlxcdGV4dHtGaXhlZCBjb25zdGFudH0iXSxbNywxLCJGIl0sWzcsMCwibV97MTV9Il0sWzksMSwiXFx0ZXh0e091dHB1dCBvZiBibG9ja30iXSxbMCwxXSxbMSwyXSxbMywwXSxbNCwxXSxbNSwwXSxbMiw2XSxbNyw2XSxbNiw4XV0=&embed" width="1617" height="304" style="border-radius: 8px; border: none; zoom: 0.5; margin-left: -2rem"></iframe>
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNyxbMSwxLCJcXG1hdGhiZntDfSJdLFszLDEsIlxcbWF0aGJme0N9Il0sWzIsMiwiXFxwaV8wIFxcdGV4dHsgZm9yIH0gQyhXXzAsIElfMCkgPSBPXzAiXSxbNCwyLCJcXHBpXzEgXFx0ZXh0eyBmb3IgfSBDKFdfMSwgQyhXXzAsIElfMCkpID0gT18wIl0sWzEsMCwiV18wIl0sWzMsMCwiV18xIl0sWzAsMSwiSV8wIl0sWzAsMSwiT18wLyBJXzEiXSxbMCwyLCIiLDIseyJjdXJ2ZSI6LTF9XSxbNCwwXSxbMSwzLCIiLDIseyJjdXJ2ZSI6LTF9XSxbNSwxXSxbNiwwXV0=&embed" width="1254" height="432" style="border-radius: 8px; border: none; zoom: 0.5"></iframe>
</div>
</center>

Exactly! Folding fits almost perfectly with the structure of the Blake3 hash function where message chunks $m_i$ are the witnesses $W_i$.

For each round, $i \in \{1\dots 16\}$, the prover uses witness $\text{chunk}_i$ where $\text{chunk}_i$ is the $i$-th chunk of the block. The public input is the index of the block, a 256-bit string as well as a few flags to keep track of where we are in the hashing. The output is the hash of chunks $1$ through $i$. The output of each round is fed into the next round as the 26-bit string and used as a bit key. 

<!-- TODO: style details a bit better in global style -->
<details>
<summary>Extra complication with circuit</summary>
<br />
As an aside, this usage requires a little bit of extra logic within the circuit to handle the fact that the bit key is actually fixed when using the compression function for tree hashing.
</details>

#### The Remaining $D - 1$ Rounds

The remaining rounds are used to prove knowledge of a Merkle path from the block's hash to the root of the tree. The circuit and input are similar to the first 16 rounds, but the flags are different. Now, the witness is the _sibling hash_ to each node in the path. The 256-bit string input is now used as input to the compression function rather than as a bit key. The output of the circuit is the hash of the block and the sibling hashes.

Diagramatically, this can be thought of as folding over one path in the Blake3 hash function's tree. For example, if we are trying to prove knowledge of the 1st block in a tree with 4 blocks, the folding be down over the circled path in the following diagram:

<center>
<div class="crop" style='overflow: hidden'>
	<img src="/blog/folded-data-avail/treescreenshot.png" alt="A diagram of the folding process for a data availability proof." style="width: min(1000px, 80%); margin: -2px 0px 0 0px;"/>
</div>
</center>

### The Final Proof

So, now we are left with a proof that the prover knows the block and a Merkle path from the block to the root of the tree. The proof is produced by running the circuit for each round in parallel and then combining the proofs to produce the final proof. Nice!

# Conclusion
Though we still need parrallization support for folding, we are well on our way to data-availablity proofs which are both fast to generate and small in size. With some work, authenticated data structures will become easier and easier to employ in real world systems as overheads decrease.
To keep up with progess check out the [Hot Proofs Blake3](https://github.com/banyancomputer/hot-proofs-blake3-circom/tree/main) library.
