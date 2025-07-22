<script>
	import Header from './Header.svelte';
	import './styles.css';
	import 'katex/dist/katex.min.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<a href="https://github.com/Lev-Stambler">Github</a>
		<a href="https://x.com/StamblerLev">X</a>
		<a href="mailto:lev.stambler@gmail.com">Email Me</a>
		<p>
			(*) If we are at the same conference, send a message for a tea break!
		</p>

	</footer>
</div>

<style>
	.app {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto auto auto;
	}

	main {
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 80vh;
	}

	footer {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
		justify-items: center;
		padding: 0 25% !important;
		margin-bottom: 1rem;
	}

	footer p {
		grid-column: 1 / span 3;
		text-align: left;
		font-size: 0.9rem;
		width: 100%;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
