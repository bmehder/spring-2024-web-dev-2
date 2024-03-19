<header>
	<div class="container">
		<div class="logo">
			<a href="/">
				<img src="/logo.svg" alt="Logo">
			</a>
		</div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		padding-block: 0.5rem;
		background-color: tomato;
		color: white;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
	}

	.logo {
		padding-block: 1rem;
	}

	ul {
		display: flex;
		gap: 1.5rem;
		list-style: none;
	}

	a {
		color: white;
	}
</style>
