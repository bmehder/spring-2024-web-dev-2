<script>
	import { page } from '$app/stores';
	import '$lib/app.css'
	import Header from '$lib/Header.svelte'
	import Hero2 from '$lib/Hero2.svelte'
	import Footer from '$lib/Footer.svelte'
	import BackToTop from '$lib/BackToTop.svelte'

	$: console.log($page)

</script>

<div class="wrapper">
	<Header />

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
