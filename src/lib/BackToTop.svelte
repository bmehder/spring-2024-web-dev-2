<script>
	import { fade } from 'svelte/transition'

	export let threshold = 1000

	const scrollToTop = () => window.scrollTo(0, 0)

	let scrollY
</script>

<svelte:window bind:scrollY />

{#if scrollY > threshold}
	<button transition:fade on:click={scrollToTop}>
		&#8963;
	</button>
{/if}

<style>
	button {
		position: fixed;
		right: 2rem;
		bottom: 2rem;
		padding: 0;
		line-height: 0;
		background-color: var(--bg-color, var(--light));
		color: var(--color, var(--accent));
    font-size: 2rem;
		border-radius: 50%;
		box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.24);
		transition: scale 150ms ease;
		opacity: 0.8;
	}

	button:hover {
		outline: none;
		scale: 0.95;
	}
</style>