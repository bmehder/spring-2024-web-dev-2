<script>
	import '$lib/app.css'
	import { page } from '$app/stores'
	import Header from '$lib/Header.svelte'
	import MobileHeader from '$lib/MobileHeader.svelte'
	import Hero2 from '$lib/Hero2.svelte'
	import Footer from '$lib/Footer.svelte'
	import BackToTop from '$lib/BackToTop.svelte'

	let innerWidth
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
	{#if innerWidth > 900}
		<Header />
	{:else}
		<MobileHeader />
	{/if}

	{#if $page.route.id === '/'}
		<Hero2 />
	{/if}

	<main class="container">
		<slot />
	</main>

	<Footer />
</div>

<BackToTop />

<style>
	.wrapper {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	main {
		width: 100%;
		padding-block: 3rem;
		line-height: 1.5;
	}
</style>
