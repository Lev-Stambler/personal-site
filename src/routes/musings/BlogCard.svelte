<script lang="ts">
	export let post: {
		slug: string;
		date: string;
		excerpt: string;
		readingTime: number | undefined;
		tags: string[];
		title: string;
	} | null = null;
</script>

<div class="box" style="display: box;">
	<div
		class="wrapper"
		on:click={() => {
			window.location.href = `/musings/${post?.slug}`;
		}}
	>
		<h2>
			{post?.title}
		</h2>
		{new Date(post?.date || '').toLocaleString()}
		<hr />
		<p>{post?.excerpt}</p>
	</div>
</div>

<style>
	.wrapper {
		cursor: pointer;
		box-sizing: border-box;
		border: 1px black solid;
		padding: 1rem;
		display: grid;
	}
	h2 {
		font-size: 1.3rem;
	}
</style>
