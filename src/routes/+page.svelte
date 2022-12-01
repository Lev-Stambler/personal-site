<script>
	import Counter from './Counter.svelte';
	import turtle from '$lib/images/turtle-good.png';
</script>

<svelte:head>
	<title>Lev Stambler</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Hello!</h1>
	<a href="https://github.com/Lev-Stambler/3D-Turtles" target="blank" label="3D Turtles and Exploration">
		<img src={turtle} alt="Welcome" />
	</a>

	<h2>
		I am Lev. Here are the quick highlights
		<ul>
			<li>TCS is fun</li>
			<li>I like to code</li>
			<li>I like to learn</li>
		</ul>
	</h2>
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

	a {
		width: 100%;
		padding-left: 10rem;
		height: auto;
		justify-self: center;
		grid-row: span 2;
		grid-column: span 2;
	}

	h1 {
		grid-column: span 1;
		height: min-content;
	}
	h2 {
		align-self: baseline;
		justify-self: start;
	}
</style>
