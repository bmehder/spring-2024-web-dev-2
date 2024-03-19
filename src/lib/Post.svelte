<script>
	export let post
</script>

<div class="card">
	<a href="/blog/{post.slug}">
		<img class="square" src={post.featured_image} alt={post.title} />
	</a>

	<div class="info">
		<h2><a href="/blog/{post.slug}">{@html post.title}</a></h2>
		<p>{@html post.excerpt}</p>
	</div>

	<a class="button" href="/blog/{post.slug}"> Read More </a>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		padding-block-end: 1.5rem;
		border: 1px solid;
	}

	.info {
		display: grid;
		gap: 0.5rem;
		padding: 1.5rem;
	}

	.info a {
		color: initial;
	}

	.button {
		margin-block-start: auto;
		margin-inline: 1.5rem;
	}
</style>
