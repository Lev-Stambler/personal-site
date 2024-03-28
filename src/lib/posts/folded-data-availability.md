---
slug: folding-data-available
title: Folding for Data Availability; Fun for All Sizes
date: 2024-03-26
excerpt: "TODO:"
tags: [Cryptography, Blockchain, Distributed Systems]
imgSrc: /blog/warrant.webp
---

# Folding for Data Availability: Fun for All Sizes

Data availability proofs are ubiquitous in distributed systems: especially in blockchains, where they are used to both authenticate data-blobs and prove data-storage. (TODO places used ref)

Current solutions for data availability proofs are based on Merkle trees and have one of the following drawbacks:
- They require a large number of constraints to generate a proof and as such are computationally expensive.
- They require usage of newer, algebraic hash functions which have not stood the test of time.

So, can we get around both issues? The answer seems to be yes!

In this post, we will explore a new technique for generating data availability proofs, primarily leveraging cryptographic folding and the Blake3 hash function. Folding is the new kid on the block in the world of recursive proving and proof carrying data (TODO: sources here).

## A Brief Introduction

*Remark:* If the introduction is too terse, feel free to skip it and move to the next section.

At a high level, the Blake3 hash function has an in-built Merkle-tree like mechanism to produce a hash of a large amount of data. So, to produce a data-availability proof, we simply need to generate a proof of knowledge from a random leaf to the root (TODO: maybe explain better). For anyone familiar with Merkle trees, producing a proof requires verifying $O( \log N)$ hashes where $N$ is the number of leaves in the tree. Even though the scaling is relatively efficient, there is still a significant overhead in terms of number of constraints in real-world proving systems.

However, the folding technique can allows us to quickly generate proofs *in parallel* for individual hash verifications in the tree and then combine them to produce the final proof. Unfortunately, at the time of writing this post, the parallelism in the folding technique is not yet implemented in the proof systems.
 
## Data Availability Proofs at a Glance

Data availability proofs are a crucial component of distributed systems. They are used to ensure that data is available to all participants in the system. In the context of blockchains, data availability proofs are used to ensure that all participants have access to the data that is being stored on the blockchain.

Though there are multiple schemes, we will focus in on Merkle-tree based approaches. In a Merkle tree, data is stored in the leaves of the tree each inner node's value is the hash of its children. By the magic of collision resistance and cryptography, we can expect that any party which can provide a *valid* path from a leaf to the root of the tree must be providing the *originally* hashed data. In other words, it is (cryptographically) impossible to cheat and come up with a path which yields the same root hash but is not the original data.

By what now? We do not get a data-availability scheme by simply having a Merkle tree. Indeed, imagine that for Bob to prove to Alice that he has the data, he must provide any path from the leaf to the root. Bob can then simply store the path from one leaf to the root and throw out the remaining data. Bob can then provide the path to Alice and Alice will be none the wiser.

Instead, we need Alice to leverage randomness. Now, Alice can ask Bob to provide a path from a *random* leaf to the root. Bob cannot simply store the path from one leaf to the root and throw out the remaining data. If he does this, he will be caught out when Alice asks for a path from a different leaf to the root. Bob must store all the paths from all the leaves to the root.

## Folding at a Glance
Remark: Check out this [great blog post](https://blog.zk.link/nova-studies-i-exploring-aggregation-recursion-and-folding-23b9a67000cd) for an introduction to folding.

For simplicity, we will think about non-zero knowledge SNARKS (i.e. they do not preserve secrecy). In general, a SNARK can be thought of as consisting of a witness (which we will refer to as $$W$$), a public input, $I$, a public output, $O$ and a circuit $C$. Though often not framed in these terms, we can think of a SNARK as a proof that the circuit $C$ with inputs $W$ and $I$ returns back the public output $O$.

For our purposes, we can think of folding as doing a sort of *iteration* over a circuit. We will iterate the circuit for a number of rounds, $r$, and at each round, we update some running proof state. For round $i$, the update will prove that given the output from the last run, $O_{i - 1}$, as the new public input $I_i$ and witness $W_i$, then $C(W_i, O_{i - 1}) = O_i$. Moreover, this proof will be "combined" with the proof from the previous round to produce a new proof for the current round.

In other words, we have that after round $i$, the current proof proves that $C(W_i, C(W_{i - 1}, C(W_{i - 2}, \ldots C(W_0, I_0) \ldots ))) = O_i$.
The magic of folding is that each round's proof can be produced in parallel and then combined to produce the final proof. (TODO: source)

## Blake3
The [Blake3 hash function](TODO REAL LINK) is surprisingly suited for folding. Not only does it use a Merkle-tree like structure to hash large amounts of data, but the inner-workings of the hash function can be broken up for folding in a natural way.

The Blake3 hash function's design is a variation on the Blake2 hash function. It is designed to be fast and secure and is based off of one core building block: **the compression function**.

<details>
<!-- TODO: check this -->
  <summary>A Note on Definitions for the Compression Function</summary>
	Technically, the compression function in Blake3 is not the thing that I am calling a compression function here. The function that I am referring to simply runs the compression function multiple times (8 in the case of Blake3). The number of rounds is a parameter of the hash function and can be adjusted to trade off between speed and security. See the [Wikipedia page on block ciphers](https://en.wikipedia.org/wiki/Block_cipher#Iterated_block_ciphers) for more information.
</details>

The compression function can be thought of as a function which takes in a $512$-bit state, a $256$ bit key, and some metadata. The function then produces a $256$-bit, hard to invert state.
The hash function itself is built up by chaining together multiple compression functions in various ways.

First, the data is split up into blocks of $1024$ bytes (or $8192$ bits). Each block is then processed *sequentially* by splitting the block into $256$-bit chunks and then feeding them into the compression function. The first chunk uses a fixed bit key. Then, for all other chunks, the bit key is set to the prior chunk's output.
The last chunk's output is the hash of the entire block.

All the blocks are then hashed together in a tree-like structure to produce the final hash. The "hash function" here is the compression function.

## Putting it All Together
Now we are cooking 🍳! We have review all the building blocks of how to do data-availability with folding. The idea is that our circuit is going to be the "compression function" of Blake3 as well as some extra logic to handle whether we are chaining together compression functions (as when hashing 1 block) or hashing multiple blocks together into a tree.

The *initial* public input is going to be the index of the block for which we want to prove membership. Assuming that the data block takes up the full $1024$ bytes, 
we will have approximately $16 + D$ rounds of folding where $D = \log_2(\text{number of blocks})$.
For the first 16 rounds, the prover shows knowledge of the block. I.e. the proof verifies that $H(\text{block}) = \text{hash}$ where $H$ is the hash function and $\text{hash}$ is the hash of the block. For the remaining $D$ rounds, the prover shows knowledge of a Merkle path from the block to the root of the tree.

#### The First $16$ Rounds
For each round, $i \in \{1\dots 16\}$, the prover uses witness $\text{chunk}_i$ where $\text{chunk}_i$ is the $i$-th chunk of the block. The public input is the index of the block, a 256-bit string, the current chunk index, as well as a few flags to keep track of the fact that we are in the first 16 rounds. The output is the hash of chunks $1$ through $i$. The output of each round is fed into the next round as the 26-bit string and used as a bit key. This usage requires a little bit of extra logic within the circuit $C$ to handle the fact that the bit key is actually fixed when using the compression function for tree hashing.

#### The Remaining $D - 1$ Rounds
The remaining rounds are used to prove knowledge of a Merkle path from the block's hash to the root of the tree. The circuit and input are similar to the first 16 rounds, but the flags are different. Now, the witness is the *sibling hash* to each node in the path. The 256-bit string input is now used as input to the compression function rather than as a bit key. The output of the circuit is the hash of the block and the sibling hashes.

### The Final Proof
So, now we are left with a proof that the prover knows the block and a Merkle path from the block to the root of the tree. The proof is produced by running the circuit for each round in parallel and then combining the proofs to produce the final proof. Nice!

## Follow Up Steps
To reap the benefits of folding here, we need to implement the parallelism in the proof system. Then, we can benchmark the folding technique against the traditional Merkle-tree based data availability proofs.



Parallelization and benchmarking
<!-- Why no benchmarks?? -->
