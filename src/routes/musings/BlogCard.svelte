<script lang="ts">
	export let post: {
		slug: string;
		date: string;
		excerpt: string;
		readingTime: number | undefined;
		tags: string[];
		title: string;
		imgSrc: string;
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
		<div>
			{new Date(post?.date || '').toDateString()}
			<hr />
			<p>{@html post?.excerpt}</p>
		</div>
		<img src={post?.imgSrc} alt="" />
	</div>
</div>

<style>
	.wrapper {
		cursor: pointer;
		box-sizing: border-box;
		border: 1px black solid;
		padding: 2rem;
		display: grid;
		grid-template-columns: 60% 40%;
		gap: 1rem;
	}
	h2 {
		grid-column: span 2;
		font-size: 1.3rem;
	}
	img {
		width: 100%;
	}
</style>
