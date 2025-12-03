<svelte:head>
	<title>Work & Consulting</title>
	<meta name="description" content="AI Research and Cryptography Consulting" />
</svelte:head>

<div class="text-column">
	<h1>Work & Consulting</h1>
	<p class="intro">
		I occasionally take on research consulting and technical advisory work, particularly in
		<strong>AI systems</strong>, <strong>ML engineering</strong>, and <strong>cryptographic protocols</strong>.
	</p>

	<h2 class="section-header">Current</h2>

	<div class="work-item current">
		<h3>NeverLocal</h3>
		<span class="tag">Quantum Crypto</span>
		<p>
			Research at <a href="https://neverlocal.com/">NeverLocal</a>, a company building cryptographic primitives
			grounded in physics rather than computational assumptions. Working on one-time programs, quantum key distribution,
			and bringing quantum cryptography from theory to practice.
		</p>
	</div>

	<h2 class="section-header">Areas of Focus</h2>

	<div class="focus-grid">
		<div class="focus-item">
			<h3>AI Research & Engineering</h3>
			<ul>
				<li>Interpretability tooling and analysis</li>
				<li>LLM evaluation and red-teaming</li>
				<li>ML system architecture</li>
				<li>Technical due diligence</li>
			</ul>
		</div>

		<div class="focus-item">
			<h3>Cryptography & Security</h3>
			<ul>
				<li>Zero-knowledge proof systems</li>
				<li>Protocol design and review</li>
				<li>Formal verification</li>
			</ul>
		</div>
	</div>
</div>

<hr />

<div class="text-column">
	<h2 class="section-header">Selected Past Work</h2>

	<div class="work-item">
		<h3>ZK-SNARKs + Folding for Hash Functions</h3>
		<span class="tag">Cryptography</span>
		<p>
			Implemented the Blake-3 hash function using folding (<a href="https://github.com/microsoft/Nova">Nova</a>) and Circom.
			Blake-3 combines sponge and Merkle-Damgard constructions for speed and security.
			<a href="/musings/folding-data-available">Blog post</a> on the implementation.
		</p>
	</div>

	<div class="work-item">
		<h3>Private Playable Game Character</h3>
		<span class="tag">ZK Proofs</span>
		<p>
			Worked with <a href="https://www.topology.gg/">Topology</a> to create a game where character functionality and internal state is only known to the creator.
			Created cryptographic specification, implemented ZK-SNARK circuits in <a href="https://github.com/iden3/circom">Circom</a>, and built a basic compiler.
		</p>
	</div>

	<div class="work-item">
		<h3>On-Chain Randomness for Video Games</h3>
		<span class="tag">Blockchain</span>
		<p>
			Built a novel lottery system for a blockchain gaming startup. Verified math, ensured safe use of cryptographic primitives, and built initial smart contract prototype in Solidity.
		</p>
	</div>

	<div class="work-item">
		<h3>Bulletproofs in Cairo</h3>
		<span class="tag">Cryptography</span>
		<p>
			Implemented Bulletproofs as part of a Starkware grant.
			The library has 33+ stars and is used by several startups.
			<a href="https://github.com/Lev-Stambler/bulletproof-cairo">Github</a>
		</p>
	</div>
</div>

<hr />

<div class="cta-section">
	<h2>Interested in working together?</h2>
	<p>
		Reach out via <a href="mailto:lev.stambler@gmail.com">email</a> or
		<a href="https://www.linkedin.com/in/lev-stambler-888052154/">LinkedIn</a>.
	</p>
</div>

<style>
	.intro {
		margin-bottom: 1.5rem;
	}

	.focus-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-top: 1rem;
	}

	.focus-item h3 {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
		color: var(--color-theme-1);
		text-align: left;
	}

	.focus-item ul {
		margin: 0;
		padding-left: 1.2rem;
	}

	.focus-item li {
		padding: 0.2rem 0;
	}

	.work-item {
		margin-bottom: 1.5rem;
	}

	.work-item.current {
		padding: 1rem;
		border-left: 3px solid var(--color-theme-1);
		background: rgba(255, 255, 255, 0.3);
	}

	.work-item h3 {
		font-size: 1.15rem;
		margin-bottom: 0.25rem;
		text-align: left;
	}

	.cta-section {
		text-align: center;
		padding: 2rem 0;
	}

	.cta-section h2 {
		font-size: 1.3rem;
	}

	hr {
		margin: 2rem 0;
		border: none;
		border-top: 1px solid var(--color-bg-0);
	}

	@media (max-width: 600px) {
		.focus-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
