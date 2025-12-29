---
slug: cs-in-ai
title: CS Research in an Age of AI
date: 2025-12-29
excerpt: ''
tags: [aa]
imgSrc: /blog/warrant.webp
---

<script>
	import Sidenote from '$lib/components/Sidenote.svelte';
</script>

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

# CS Research in an Age of AI
**As of November 2025:** I am sleepy and jet-lagged at Devconnect 2025 in Buenos Aires, Argentina. And, perhaps more importantly, I am yelling at Claude to please top try-catching everything and suppress code failures. Mostly, Claude is writing boiler-plate (and often incorrect) code: the hard stuff is still left up to me. 
Two weeks later, I am asking Claude to implement research papers from scratch and optimize my Rust code via a continuous loop of benchmarking, testing, and development. Two weeks of non-stop prompting later, I begin to have a nagging feeling that I am growing dumber by the second.

_What happened over the course of November?_
Well, Gemini 3 and Claude Opus 4.5 came out. Using the two together, I began implementing papers from scratch over a few days<Sidenote>Gemini AAB works amazingly well with Claude Opus 4.5 + Gemini 3 pro. See <a href="https://www.reddit.com/r/ChatGPTCoding/comments/1lm3fxq/gemini_cli_is_awesome_but_only_when_you_make/">this Reddit thread</a> for details.</Sidenote>.
Are there still glaring and frustrating problems with agentic coding? Yes: 100%. For some reason, Claude likes to push up environment secrets and all tools I use just keep growing the code-base without abandon.
Still, I would be lying if I said I'd be more productive without these tools.

**December 2025:** I feel like I am starting to get the hang of these tools. Interestingly, when I am tired and not focused, I do not end up achieving my goals (say getting a proof finished, some training code running etc.). Even with extensive agentic coding use, if I am not _asking_ for the right things, or leaving high level decisions on auto-pilot, I get in trouble.

_Delegating to Claude Wasted my Time:_
I wanted Claude to design some infra code to make developing and training models a bit more seamless.
Claude ended up writing a (production-grade looking) code-base using [Sky Pilot](https://github.com/skypilot-org/skypilot). Though this may be the correct tool for massive training runs, it is by no means the right tool for quick training iteration<Sidenote>Sky Pilot is great for massive training runs, but it is not the right tool for quick iteration. Mainly it takes quite some time to get up and running on new instances + cheaper clusters such as Runpod and Vast.ai are a bit finicky with it.</Sidenote>.
Throughout my time using SkyPilot, Claude was still in charge: but, I ended up waiting around for Claude to start and stop runs as it caught bugs and convergence issues.
It took some agency on my end to realize that I should just write a simple training loop that auto-syncs to a cheap GPU instance that I rent for the day and have Claude access that instance directly.
This ended up being a much more productive workflow: I, or rather Claude, could iterate quickly.

## Where do I Fit In All of This?
I have been thinking about this question a lot recently, and I believe that its response permeates the entire stack of my workflow: from minute-to-minute coding, to high-level research direction.

First, **what should I be doing while Claude is writing code for me and testing it?** I don't quite have an answer for this yet, but I believe that I should be focusing on high-level design decisions and research direction.
This means that I am reading (or skimming) papers, thinking about design decisions for the code-base, and trying to understand the implications of various design choices.
Then, once ready, I can feed in high-level prompts to Claude and let it handle the low-level implementation details.
Otherwise, I do find my self switching between a few projects simultaneously. Though occasionally productive, this does lead to a lot of context switching and lost time. I am not too sure how to solve this problem yet, but I believe that being able to integrate multiple parallel workflows into a single agentic coding session would be a huge boon.

Next, **how do I ensure that I am not just a passive observer in this process?** Weirdly enough, I find this more a function of my sleep quality and my own energy levels than anything else.
When well-rested and focused, I find myself making many high-level design decisions and guiding the overall direction of the project.
However, when tired or distracted, I find myself just letting Claude run amok and produce code that I neither understand, and when I finally get around to reading, am quite disappointed with.
Weirdly, this is more or less the same as my pre-agentic coding workflow: when tired, I tend to make poor decisions and end up with sub-par code. When awake and focused, I tend to produce better work.
