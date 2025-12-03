<svelte:head>
	<title>About - Lev Stambler</title>
	<meta name="description" content="About Lev Stambler" />
</svelte:head>

<div class="text-column">
	<h1>About Me</h1>

	<section class="about-section">
		<p>
			I'm a PhD student at the University of Maryland working on problems at the intersection of AI and quantum computing.
			My research combines theoretical rigor with practical applicability.
		</p>
		<p>
			Before grad school, I consulted for various Web3 and crypto startups on zero-knowledge proofs and secure protocols,
			and did an internship at the Ethereum Foundation working on cryptographic research.
		</p>
	</section>

	<section class="about-section">
		<h2>Research Philosophy</h2>
		<p>
			I believe the most interesting problems live at boundaries — between theory and practice, between disciplines,
			between what we can prove and what we can only conjecture.
			My work on transformer interpretability is as much about building better AI as it is about understanding computation itself.
		</p>
	</section>

	<section class="about-section">
		<h2>Beyond Research</h2>
		<ul>
			<li>I prefer tea to coffee (send conference tea break invites)</li>
			<li>I enjoy building visualizations of mathematical concepts</li>
			<li>I believe in the power of clear writing and accessible explanations</li>
		</ul>
	</section>

	<p class="easter-egg">
		<a href="/curious" class="subtle-link" title="for the curious">...</a>
	</p>
</div>

<style>
	.about-section {
		margin-bottom: 2rem;
	}

	.about-section h2 {
		text-align: left;
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
	}

	.about-section ul {
		padding-left: 1.2rem;
	}

	.about-section li {
		padding: 0.3rem 0;
	}

	.easter-egg {
		text-align: center;
		margin-top: 3rem;
	}

	.subtle-link {
		color: transparent;
		text-decoration: none;
		cursor: default;
		transition: color 0.3s ease;
		font-size: 1.5rem;
		letter-spacing: 0.3em;
	}

	.subtle-link:hover {
		color: var(--color-theme-2);
		cursor: pointer;
		text-decoration: none;
	}
</style>
