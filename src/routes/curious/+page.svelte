<svelte:head>
	<title>You Found It</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="text-column curious-page">
	<h1>You're curious. I like that.</h1>

	<p>
		If you're reading this, you probably have good attention to detail.
		That's a quality I value in collaborators.
	</p>

	<section class="opportunity-section">
		<h2>Open to Opportunities</h2>
		<p>I'm selectively exploring:</p>
		<ul>
			<li><strong>AI Research Roles</strong> — Labs working on interpretability, alignment, or ML foundations</li>
			<li><strong>Technical Advisory</strong> — For AI startups and research orgs</li>
			<li><strong>Research Collaborations</strong> — Particularly at the AI-quantum intersection</li>
		</ul>
	</section>

	<section class="contact-section">
		<h2>Let's Talk</h2>
		<p>
			The best way to reach me is <a href="mailto:lev.stambler@gmail.com">email</a>.
			Mention that you found the curious path — it helps filter signal from noise.
		</p>
	</section>

	<p class="back-link">
		<a href="/">&larr; Back to the surface</a>
	</p>
</div>

<style>
	.curious-page {
		padding-top: 2rem;
	}

	.curious-page h1 {
		text-align: left;
	}

	.opportunity-section,
	.contact-section {
		margin: 2rem 0;
		padding: 1.5rem;
		border-left: 3px solid var(--color-theme-2);
		background: rgba(255, 255, 255, 0.3);
	}

	.opportunity-section h2,
	.contact-section h2 {
		text-align: left;
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}

	.opportunity-section ul {
		padding-left: 1.2rem;
	}

	.opportunity-section li {
		padding: 0.3rem 0;
	}

	.back-link {
		margin-top: 3rem;
		font-size: 0.9rem;
	}
</style>
