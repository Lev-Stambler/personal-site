<script lang="ts">
	export let data;
	const { page, title } = data;
</script>

<!-- Here we'll load the component of the blog post page itself -->
<svelte:component this={page} />

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
</svelte:head>

<style>
</style>
