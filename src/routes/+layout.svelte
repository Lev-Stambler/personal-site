<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<a href="https://github.com/Lev-Stambler">Github</a>
		<a href="https://github.com/Lev-Stambler">LinkdIn</a>
		<a href="https://github.com/Lev-Stambler">Twitter</a>
		<a href="https://github.com/Lev-Stambler">Contact Me</a>
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
		grid-template-columns: repeat(4, 1fr);	
		justify-content: center;
		justify-items: center;
		padding: 0 25% !important;
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
