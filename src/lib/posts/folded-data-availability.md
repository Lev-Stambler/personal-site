---
slug: folding-data-available
title: Folding for Data Availability; Fun for All Sizes
date: 2024-03-26
excerpt: "TODO:"
tags: [Cryptography, Blockchain, Distributed Systems]
imgSrc: /blog/warrant.webp
---

# Folding for Data Availability: Fun for All Sizes

Data availability proofs are ubiquitous in distributed systems: especially in blockchains, where they are used to ensure that data is available to all participants. In this post, we will explore a new technique for generating data availability proofs, primarily leveraging cryptographic folding and the Blake3 hash function. Folding is the new kid on the block in the world of recursive proving and proof carrying data (TODO: sources here).

## A Brief Introduction

*Remark:* If the introduction is too terse, feel free to skip it and move to the next section.

At a high level, the Blake3 hash function has an in-built Merkle-tree like mechanism to produce a hash of a large amount of data. So, to produce a data-availability proof, we simply need to generate a proof of knowledge from a random leaf to the root (TODO: maybe explain better). For anyone familiar with Merkle trees, producing a proof requires verifying $O( \log N)$ hashes where $N$ is the number of leaves in the tree. Even though the scaling is relatively efficient, there is still a significant overhead in terms of number of constraints in real-world proving systems.

However, the folding technique can allows us to quickly generate proofs *in parallel* for individual hash verifications in the tree and then combine them to produce the final proof. Unfortunately, at the time of writing this post, the parallelism in the folding technique is not yet implemented in the proof systems.
 
## Data Availability Proofs at a Glance

Data availability proofs are a crucial component of distributed systems. They are used to ensure that data is available to all participants in the system. In the context of blockchains, data availability proofs are used to ensure that all participants have access to the data that is being stored on the blockchain.

Though there are multiple schemes, we will focus in on Merkle-tree based approaches. In a Merkle tree, data is stored in the leaves of the tree each inner node's value is the hash of its children. By the magic of collision resistance and cryptography, we can expect that any party which can provide a *valid* path from a leaf to the root of the tree must be providing the *originally* hashed data. In other words, it is (cryptographically) impossible to cheat and come up with a path which yields the same root hash but is not the original data.

By what now? We do not get a data-availability scheme by simply having a Merkle tree. Indeed, imagine that for Bob to prove to Alice that he has the data, he must provide any path from the leaf to the root. Bob can then simply store the path from one leaf to the root and throw out the remaining data. Bob can then provide the path to Alice and Alice will be none the wiser.

Instead, we need Alice to leverage randomness. Now, Alice can ask Bob to provide a path from a *random* leaf to the root. Bob cannot simply store the path from one leaf to the root and throw out the remaining data. If he does this, he will be caught out when Alice asks for a path from a different leaf to the root. Bob must store all the paths from all the leaves to the root.

## Folding for Data Availability at a Glance
Remark: Check out this [great blog post](https://blog.zk.link/nova-studies-i-exploring-aggregation-recursion-and-folding-23b9a67000cd) for an introduction to folding.

For simplicity, we will think about non-zero knowledge SNARKS (i.e. they do not preserve secrecy). In general, a SNARK can be thought of as consisting of a witness (which we will refer to as $W$), a public input, $I$, a public output, $O$ and a circuit $C$. Though often not framed in these terms, we can think of a SNARK as a proof that the circuit $C$ with inputs $W$ and $I$ returns back the public output $O$.

<!-- For our purposes, we can think of folding as doing a sort of *iteration* over a circuit. We will iterate the circuit for a number of rounds, $r$, and at each round, we update some running proof state. For round $i$, the update will prove that given the output from the last run, $O_{i - 1}$, as the new public input $I_i$ and witness $W_i$, then $C(W_i, O_{i - 1}) = O_i$. Moreover, this proof will be "combined" with the proof from the previous round to produce a new proof for the current round.

In other words, we have that after round $i$, the current proof proves that $C(W_i, C(W_{i - 1}, C(W_{i - 2}, \ldots C(W_0, I_0) \ldots ))) = O_i$.
The magic of folding is that each round's proof can be produced in parallel and then combined to produce the final proof. (TODO: source) -->

## Blake3
talk about the blake3 hash function and how it is used in the folding technique

## Folding for Data Availability: A Closer Look
Talk about the actual folding within the compression function
<!-- Talk about || potential -->

## Conclusion
<!-- Why no benchmarks?? -->
