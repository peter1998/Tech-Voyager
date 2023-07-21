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
		<a href={link.url} class="nav-link">
			<span class="link-text">{link.name}</span>
			<div class="underline" />
		</a>
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
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	}

	.nav-link {
		position: relative;
		overflow: hidden;
		display: inline-block;
		margin-top: 10px;
		padding: 10px 20px;
		background: linear-gradient(to right, #36d1dc, #5b86e5);
		color: #fff;
		text-decoration: none;
		border-radius: 5px;
		margin-right: 10px;
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease, box-shadow 0.6s ease;
	}

	.nav-link:hover {
		background: linear-gradient(to right, #5b86e5, #36d1dc);
		box-shadow: 0px 0px 20px 10px rgba(91, 134, 229, 0.7);
		transform: translateY(-2px);
	}

	.nav-link:active {
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
		transform: translateY(1px);
	}

	.link-text {
		position: relative;
		z-index: 1;
	}

	.underline {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 2px;
		width: 0;
		background: #fff;
		transition: width 0.3s ease;
	}

	.nav-link:hover .underline {
		width: 100%;
	}

	@media (min-width: 600px) {
		.header {
			flex-direction: row;
			justify-content: space-around;
		}

		.nav-link {
			margin-right: 10px;
			margin-bottom: 0;
		}
	}

	@media (min-width: 768px) {
		.nav-link {
			padding: 10px 30px;
		}
	}

	@media (min-width: 1024px) {
		.nav-link {
			padding: 10px 40px;
		}
	}

	@media (min-width: 1200px) {
		.nav-link {
			padding: 10px 50px;
		}
	}

	@media (min-width: 1400px) {
		.nav-link {
			padding: 10px 60px;
		}
	}
</style>
