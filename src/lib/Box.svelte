<script>
	export let src = ''
	export let title = ''
	export let subheading = ''
	export let href = ''
</script>

<div class="flow">
	<img {src} alt={title} />
	<div>
		<h3>{title}</h3>
		<div class="subheading">{subheading}</div>
	</div>
	<p>
		<slot><!-- optional fallback --></slot>
	</p>
	<a {href} class="button">Read More</a>
</div>

<style>
	img {
		aspect-ratio: 16/9;
		object-fit: cover;
		object-position: center;
	}

	.subheading {
		text-transform: uppercase;
		font-size: 0.8rem;
		letter-spacing: 1px;
	}

	.button {
		display: inline-block;
		padding-inline: 1rem;
	}
</style>
