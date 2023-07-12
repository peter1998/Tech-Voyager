<script>
	import Sidebar from '../sidebar/Sidebar.svelte';
	let projects = [
		{
			name: 'CryptoLearnX',
			description: 'A learning platform for Cryptocurrency.',
			url: 'https://github.com/peter1998/CryptoLearnX',
			liveUrl: 'https://cryptolearnx.com' // replace with actual live URL
		},
		{
			name: 'WorkShop-Deep-Learning-Lab_files_ChestX_Ray',
			description: 'Deep Learning Lab files for Chest X-Ray.',
			url: 'https://github.com/peter1998/WorkShop-Deep-Learning-Lab_files_ChestX_Ray',
			liveUrl: 'https://chestxraylab.com' // replace with actual live URL
		},
		{
			name: 'Cryptocurrency-Market-Analysis-Platform',
			description: 'A platform for analyzing the Cryptocurrency market.',
			url: 'https://github.com/peter1998/Cryptocurrency-Market-Analysis-Platform',
			liveUrl: 'https://cryptomarketanalysis.com' // replace with actual live URL
		},
		{
			name: 'Vending Machine',
			description: 'A vending machine simulation.',
			url: 'https://github.com/peter1998/vending-maschine',
			liveUrl: 'https://vendingmachine.com' // replace with actual live URL
		}
	];
</script>

<Sidebar />

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/cv">CV</a>
	<a href="/contact">Contact</a>
</nav>

<h1>My Projects</h1>
<p>Here are some of the projects I've worked on:</p>

<ul>
	{#each projects as project (project.name)}
		<li>
			<h2>{project.name}</h2>
			<p>{project.description}</p>
			<a href={project.url} target="_blank">Living Code</a>
			<a href={project.liveUrl} target="_blank">Live Site</a>
		</li>
	{/each}
</ul>

<style>
	nav {
		display: flex;
		justify-content: space-around;
		background-color: #9be2d5;
		color: #fff;
		padding: 10px;
	}

	nav a {
		color: #fff;
		text-decoration: none;
	}

	h1 {
		text-align: center;
	}

	p {
		text-align: center;
	}

	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	li {
		background-color: #f5f5f5;
		margin: 10px;
		padding: 20px;
		width: 80%;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	h2 {
		margin: 0;
	}

	a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px 20px;
		background-color: #333;
		color: #fff;
		text-decoration: none;
		border-radius: 5px;
		margin-right: 10px;
	}
</style>
