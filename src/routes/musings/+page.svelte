<script lang="ts">
	import BlogCard from './BlogCard.svelte';
  import { onMount } from 'svelte';


	// const musings = [['Theorem Provers',  'Thoughts here']];
	export let data;
	let { posts } = data;
	console.log(posts);
	// Posts-sorted by date
	let sortedPosts = posts.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});

	onMount(() => {
		window.MathJax.typeset()
	})
</script>

<svelte:head>
	<title>Musings</title>
	<meta name="description" content="Musings" />
</svelte:head>

<div class="text-column current-research">
	<h1>My Blog</h1>
	<!-- {#each musings as musing, i}
		<h2>{i + 1}) {musing[0]}</h2>
		{musing[1]}
	{/each} -->
	{#each sortedPosts as post}
		<BlogCard {post} />
		<br />
	{/each}
</div>

<style>
</style>
