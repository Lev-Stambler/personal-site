<script lang="typescript">
	// Declare the page variable to use on the client
	export let data;
	const { page, title } = data;
	console.log(data);
</script>

<!-- Here we'll load the component of the blog post page itself -->
<svelte:component this={page} />

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
</svelte:head>

<style>
</style>
