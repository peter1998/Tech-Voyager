<script>
	let links = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{ name: 'CV', url: '/cv' },
		{ name: 'Projects', url: '/projects' },
		{ name: 'Contact', url: '/contact' }
	];
</script>

<nav class="header">
	{#each links as link (link.name)}
		<a href={link.url}>{link.name}</a>
	{/each}
</nav>

<style>
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		background-color: #9be2d5;
		color: #fff;
		padding: 10px;
	}

	.header a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px 20px;
		background-color: #333;
		color: #fff;
		text-decoration: none;
		border-radius: 5px;
		margin-right: 10px;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	.header a:hover {
		background-color: #fff;
		color: #333;
	}

	@media (min-width: 600px) {
		.header {
			flex-direction: row;
			justify-content: space-around;
		}

		.header a {
			margin-right: 10px;
			margin-bottom: 0;
		}
	}

	@media (min-width: 768px) {
		.header a {
			padding: 10px 30px;
		}
	}

	@media (min-width: 1024px) {
		.header a {
			padding: 10px 40px;
		}
	}

	@media (min-width: 1200px) {
		.header a {
			padding: 10px 50px;
		}
	}

	@media (min-width: 1400px) {
		.header a {
			padding: 10px 60px;
		}
	}
</style>
