<script lang="ts">
	import BlogCard from './BlogCard.svelte';

	// const musings = [['Theorem Provers',  'Thoughts here']];
	export let data;
	let { posts } = data;
	console.log(posts);
</script>

<svelte:head>
	<title>Musings</title>
	<meta name="description" content="Musings" />
</svelte:head>

<div class="text-column current-research">
	<h1>Things I am Thinking About</h1>
	<!-- {#each musings as musing, i}
		<h2>{i + 1}) {musing[0]}</h2>
		{musing[1]}
	{/each} -->
	{#each posts as post}
		<BlogCard {post} />
		<br />
	{/each}
</div>

<style>
	h2 {
		font-size: 1.3rem;
	}
</style>
