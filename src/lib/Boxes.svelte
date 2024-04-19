<script>
	import Box from '$lib/Box.svelte'
</script>

<section class="section flow">
	<h2>Lorem ipsum</h2>
	
	<div class="boxes">
		<Box
			src="https://picsum.photos/300?random=1"
			title="Title One"
			subheading="lorem ipsum"
			href="/"
			>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum atque
			molestias odio illum tempora corrupti!</Box
		>
		
		<Box
			src="https://picsum.photos/300?random=2"
			title="Title Two"
			subheading="lorem ipsum"
			href="/blog"
			>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum atque
			molestias odio illum tempora corrupti!</Box
		>
		
		<Box
			src="https://picsum.photos/300?random=3"
			title="Title Three"
			subheading="lorem ipsum"
			href="/contact"
			>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum atque
			molestias odio illum tempora corrupti!</Box
		>
	</div>
</section>

<style>
	section {
		padding: 3rem;
		background-color: rgb(32, 32, 32);
		border-radius: 1rem;
		color: white;
	}
	.boxes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		gap: 3rem;
		color: white;
	}
</style>
