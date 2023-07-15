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
</style>
