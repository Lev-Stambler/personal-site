<script lang="ts">
	import { onMount } from 'svelte';
	import { createTypstRenderer } from '@myriaddreamin/typst.ts';

	export let content: string;
	export let width: number = 800;
	export let pixelPerPt: number = 2;

	let containerElement: HTMLDivElement;
	let renderer: any;
	let isLoading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			renderer = createTypstRenderer();
			await renderer.init();
			await renderContent();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to initialize Typst renderer';
			isLoading = false;
		}
	});

	async function renderContent() {
		if (!renderer || !content) return;
		
		try {
			isLoading = true;
			error = null;
			
			const svg = await renderer.renderSvg({
				mainContent: content,
				width,
				pixelPerPt
			});
			
			if (containerElement) {
				containerElement.innerHTML = svg;
			}
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to render Typst content';
		} finally {
			isLoading = false;
		}
	}

	$: if (renderer && content) {
		renderContent();
	}
</script>

<div class="typst-container">
	{#if isLoading}
		<div class="loading">Rendering Typst document...</div>
	{:else if error}
		<div class="error">Error: {error}</div>
	{/if}
	
	<div bind:this={containerElement} class="typst-content" class:hidden={isLoading || error}></div>
</div>

<style>
	.typst-container {
		width: 100%;
		max-width: 100%;
		overflow-x: auto;
	}

	.typst-content {
		width: 100%;
	}

	.typst-content :global(svg) {
		max-width: 100%;
		height: auto;
	}

	.loading {
		text-align: center;
		padding: 2rem;
		color: #666;
		font-style: italic;
	}

	.error {
		text-align: center;
		padding: 2rem;
		color: #d32f2f;
		background-color: #ffebee;
		border: 1px solid #ffcdd2;
		border-radius: 4px;
		margin: 1rem 0;
	}

	.hidden {
		display: none;
	}
</style>