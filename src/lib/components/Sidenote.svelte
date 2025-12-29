<script context="module" lang="ts">
	let counter = 0;
	export function resetSidenoteCounter() {
		counter = 0;
	}
</script>

<script lang="ts">
	const id = ++counter;
</script>

<span class="sidenote-wrapper">
	<label class="sidenote-toggle" for="sn-{id}" aria-label="Toggle sidenote">{id}</label>
	<input type="checkbox" id="sn-{id}" class="sidenote-checkbox" />
	<span class="sidenote">
		<span class="sidenote-number">{id}</span>
		<slot />
	</span>
</span>

<style>
	.sidenote-wrapper {
		position: relative;
	}

	.sidenote-toggle {
		font-size: 0.75em;
		vertical-align: super;
		cursor: pointer;
		color: var(--color-theme-1, #ff3e00);
		font-weight: 500;
	}

	.sidenote-checkbox {
		display: none;
	}

	.sidenote {
		font-size: 0.875rem;
		line-height: 1.4;
		color: rgba(0, 0, 0, 0.6);
	}

	.sidenote-number {
		font-size: 0.75em;
		vertical-align: super;
		margin-right: 0.25em;
		color: var(--color-theme-1, #ff3e00);
	}

	/* Desktop: sidenotes in margin */
	@media (min-width: 1100px) {
		.sidenote {
			position: absolute;
			right: calc(-12rem - 2rem);
			width: 12rem;
			top: 0;
			margin: 0;
		}

		.sidenote-toggle {
			cursor: default;
		}
	}

	/* Mobile/tablet: collapsible inline */
	@media (max-width: 1099px) {
		.sidenote {
			display: none;
			background: var(--color-bg-2, hsl(224, 44%, 95%));
			padding: 0.75rem 1rem;
			margin: 0.5rem 0;
			border-radius: 4px;
			border-left: 3px solid var(--color-theme-1, #ff3e00);
		}

		.sidenote-checkbox:checked + .sidenote {
			display: block;
		}

		.sidenote-number {
			display: none;
		}
	}
</style>
