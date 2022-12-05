<script lang="typescript">
	// Declare the page variable to use on the client
	export let data: any;
	const page = data.page
	console.log("AAA", page)
</script>

<!-- Here we'll load the component of the blog post page itself -->
<svelte:component this={page} />
