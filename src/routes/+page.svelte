<script>
	import turtle from '$lib/images/turtle-good.png';
</script>

<svelte:head>
	<title>Lev Stambler</title>
	<meta name="description" content="Lev Stambler - Quantum Computing and AI Researcher" />
</svelte:head>

<section style="max-width: 64rem; margin: 0 auto;">
	<div class="left">
		<h1 style="text-align: left;">Hello!</h1>
		<p>
			I'm Lev, a PhD student at UMD with a background in
			<span class="highlight">AI</span> and <span class="highlight">quantum cryptography</span>, with over 4 years
			of consulting on AI systems and cryptography.
		</p>
		<p style="margin-top: 1rem;">My work spans:</p>
		<ul>
			<li><strong>Model Quantization Research</strong> — Making models more efficient and deployable</li>
			<li><strong>AI Safety & Interpretability</strong> — Understanding what neural networks actually learn</li>
			<li><strong>Deep Tech Consulting</strong> — Turning research into production-grade engineering</li>
			<li><strong>Quantum Cryptography</strong> — Security under realistic adversary models</li>
			<li>I like tea *</li>
		</ul>
	</div>
	<div class="right">
		<a
			href="https://github.com/Lev-Stambler/3D-Turtles"
			target="blank"
			label="3D Turtles and Exploration"
		>
			<img src={turtle} alt="3D Turtles visualization" />
		</a>
		<p>Where theory meets creative exploration</p>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: grid;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: repeat(2, auto);
	}

	.right {
		width: 100%;
		padding-left: 10rem;
		height: auto;
		justify-self: center;
		grid-row: span 2;
		grid-column: span 2;
	}

	.left {
		align-self: baseline;
		grid-row: span 2;
		justify-self: start;
	}
	.left ul li {
		padding: 0.2rem 0;
		list-style: katakana;
	}
</style>
