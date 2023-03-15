<svelte:head>
	<title>Work Experience</title>
	<meta name="description" content="Work" />
</svelte:head>

<div class="text-column current-research">
	<h1>Ongoing Work</h1>

	<div class="research-item">
		<h2>Private Playable Game Character</h2>
		<p>
			I am currently working with <a href="https://www.topology.gg/">Topology</a> to create a game. The game
			allows players to create characters which battle other characters. Each character's
			functionality and internal state is only known to the creator of the character. When characters fight
			each other, each player submits a set of actions performed by their respective character to a blockchain
			as well as a proof that the action done was correct with respect to the character's internal state. Work included
			creating the cryptographic specification, implementing ZK-SNARK circuits in <a href="https://github.com/iden3/circom">Circom</a>,
			and writing a basic compiler.
		</p>
	</div>
</div>

<hr />

<div class="text-column">
	<h1>Past Work</h1>
	<hr />
	<div class="research-item">
		<h2>On Chain Randomness for Video Games</h2>
		<p>
			Worked with a blockchain gaming startup to build a novel lottery system. Helped them verify
			their math and build their system to safely use cryptographic primitives. I also built their
			initial smart contract prototype in Solidity.
		</p>
	</div>
	<div class="research-item">
		<h2>Bulletproofs in Cairo Implementation</h2>
		<p>
			Implemented Bulletproofs, a zero knowledge, succinct non-interactive argument of knowledge (ZK
			Snark) proof system, as part of a grant from Starkware. ZK-Snarks allow for a prover to show a
			verifier that they know an element of a NP language without revealing the exact element they
			know. The library has 33 stars and 3 startups actively working with it. The library can be
			found on <a href="https://github.com/Lev-Stambler/bulletproof-cairo">Github</a>.
		</p>
	</div>
</div>
<hr />
<div>
	<h2 style="text-align: center; font-size: 1.5rem;">Interested in working together?</h2>
	<p>
		I am usually quite unavailable, but feel free to reach out via LinkedIn or through my email.
	</p>
</div>

<style>
	.research-item h2 {
		font-size: 1.3rem;
	}
</style>
