---
---
slug: cryptography
title: Folding for Data Availability: Fun for All Sizes
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

## Folding for Data Availability at a Glance
Talk about the folding technique and how it can be used to generate data availability proofs.

## Blake3
talk about the blake3 hash function and how it is used in the folding technique

## Folding for Data Availability: A Closer Look
Talk about the actual folding within the compression function
<!-- Talk about || potential -->

## Conclusion
<!-- Why no benchmarks?? -->
