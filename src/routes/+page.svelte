<script>
	import turtle from '$lib/images/turtle-good.png';
</script>

<svelte:head>
	<title>Lev Stambler</title>
	<meta name="description" content="Lev Stambler's Personal Site" />
</svelte:head>

<section style="max-width: 64rem; margin: 0 auto;">
	<div class="left" >
		<h1 style="text-align: left;">Hello!</h1>
		<p>
			My name is Lev. I am a PhD student in the University of Maryland's Computer Science Department.
			<br />
			<br />
			I like to be brief:
		</p>
		<ul>
			<li>I like to learn</li>
			<li>I like to code</li>
			<li>I find math and theoretical computer science quite fun</li>
			<li>I like tea *</li>
		</ul>
	</div>
	<div class="right">
		<a
			href="https://github.com/Lev-Stambler/3D-Turtles"
			target="blank"
			label="3D Turtles and Exploration"
		>
			<img src={turtle} alt="Welcome" />
		</a>
		<p>
			The above picture is from a project which explores "drawing" rational numbers in
			different dimensions
		</p>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: grid;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: repeat(2, auto);
	}

	.right {
		width: 100%;
		padding-left: 10rem;
		height: auto;
		justify-self: center;
		grid-row: span 2;
		grid-column: span 2;
	}

	.left {
		align-self: baseline;
		grid-row: span 2;
		justify-self: start;
	}
	.left ul li {
		padding: 0.2rem 0;
		list-style: katakana;
	}
</style>
