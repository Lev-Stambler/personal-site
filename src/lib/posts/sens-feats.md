---
slug: sensitive-features
title: 'Sensitivity-Based Feature Discovery Without Sparsity Assumptions'
date: 2025-09-15
excerpt:
  '        Discovering monosemantic features in language models is a key challenge in mechanistic interpretability.
  Existing methods like sparse autoencoders (SAEs) rely on two main assumptions: (1) sparsity and (2) linear representation hypothesis.
  We propose an alternative method for discovering features based on a causal sensitivity score inspired by the notion of sensitivity in analysis.
  We introduce two key principles---(1) the _sensitivity hypothesis_ and (2) the _relative norm hypothesis_, a principled alternative for the linear representation hypothesis---and show how they naturally lead to a method for discovering features in language models.
  This formulation implicitly accounts for the effects of layer normalization in modern architectures, while explaining feature sparsity _without requiring it as an assumption_.

  We validate our method on the Pythia-70M model, finding that sensitivity-based features are slightly more interpretable than SAE features without requiring sparsity assumptions.
  Moreover, we also find that SAEs already discover "sensitive" features.
  However, our approach currently faces limitations: sequential rather than parallel discovery and an intriguing tendency to find "feature removal" directions that we address but do not fully understand.'
tags: [Mechanistic Interpretability]
imgSrc: /blog/MI.gif
---

<style>
iframe {
height: -webkit-fill-available;
    min-height: 100%;
    width: -webkit-fill-available;
		border: 0px;
}
</style>

<iframe src="https://sensfeats.netlify.app/" />
