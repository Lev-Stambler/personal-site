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
		<a href="https://www.linkedin.com/in/lev-stambler-888052154/">LinkedIn</a>
		<a href="https://scholar.google.com/citations?hl=en&user=ot6uV9cAAAAJ&view_op=list_works">Google Scholar</a>
		<a href="https://x.com/StamblerLev">X</a>
		<a href="mailto:lev.stambler@gmail.com">Email Me</a>
		<p>
			<a href="/curious" class="tea-hint">(*)</a> If we are at the same conference, send a message for a tea break!
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
		/* max-width: 64rem; */
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 80vh;
	}

	footer {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		justify-content: center;
		justify-items: center;
		padding: 0 25% !important;
		margin-bottom: 1rem;
	}

	footer p {
		grid-column: 1 / span 5;
		text-align: left;
		font-size: 0.9rem;
		width: 100%;
	}

	footer a {
		font-weight: bold;
	}

	footer .tea-hint {
		color: var(--color-text);
		font-weight: normal;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	footer .tea-hint:hover {
		color: var(--color-theme-2);
		text-decoration: none;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	@media (max-width: 640px) {
		footer {
			grid-template-columns: repeat(2, 1fr);
			padding: 0 1rem !important;
			gap: 0.5rem 1rem;
		}

		footer p {
			grid-column: 1 / span 2;
		}
	}
</style>
