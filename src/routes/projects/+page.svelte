<script>
	import Sidebar from '../sidebar/Sidebar.svelte';
	import React from '../../../public/images/logos/react.png';
	import Angular from '../../../public/images/logos/angular.png';
	import Docker from '../../../public/images/logos/docker.png';
	import Node from '../../../public/images/logos/node.png';
	import sql from '../../../public/images/logos/sql.png';
	import Svelte from '../../../public/images/logos/svelte.png';
	import Ts from '../../../public/images/logos/ts.png';
	import javaScript from '../../../public/images/logos/javascript.jpg';
	import NestJs from '../../../public/images/logos/NestJS.png';
	import Jupyter from '../../../public/images/logos/jupyter-logo.png';
	import Anaconda from '../../../public/images/logos/Anaconda.png';
	import tf from '../../../public/images/logos/tf_logo.png';
	import pandas from '../../../public/images/logos/pandas.png';
	import python from '../../../public/images/logos/python.png';
	import plotly from '../../../public/images/logos/Plotly.png';
	import dash from '../../../public/images/logos/dash.png';
	import redux from '../../../public/images/logos/redux.png';
	import materialUi from '../../../public/images/logos/material-ui.png';
	import Keras from '../../../public/images/logos/keras.png';

	import CryptoLearn from '../../../public/images/projects/CryptoLearn.png';
	import ChestXRayLab from '../../../public/images/projects/ChestXRayLab.png';
	import CryptoCurrencyMarket from '../../../public/images/projects/Merged_CryptoCurrencyMarket.png';
	import VendingMaschine from '../../../public/images/projects/vendingMaschine.png';
	import {
		faYoutube,
		faFacebook,
		faLinkedin,
		faGithub,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	let projects = [
		{
			name: 'CryptoLearnX',
			description: 'A learning platform for Cryptocurrency.',
			url: 'https://github.com/peter1998/CryptoLearnX',
			liveUrl: 'https://cryptolearnx.com', // replace with actual live URL
			image: CryptoLearn, // replace with actual image URL
			technologies: [
				{ name: 'TypeScript', logo: Ts },
				{ name: 'Angular', logo: Angular },
				{ name: 'Node.Js', logo: Node },
				{ name: 'Nest.Js', logo: NestJs }

				// ... other technologies
			]
		},
		{
			name: 'WorkShop-Deep-Learning-ChestX_Ray',
			description: 'Deep Learning Lab files for Chest X-Ray.',
			url: 'https://github.com/peter1998/WorkShop-Deep-Learning-Lab_files_ChestX_Ray',
			liveUrl: 'https://chestxraylab.com', // replace with actual live URL
			image: ChestXRayLab, // replace with actual image URL
			technologies: [
				{ name: 'Anaconda', logo: Anaconda },
				{ name: 'Jupyter Notebook', logo: Jupyter },
				{ name: 'tensor-flow', logo: tf },
				{ name: 'Pandas', logo: pandas },
				{ name: 'Keras', logo: Keras }

				// ... other technologies
			]
		},
		{
			name: 'Cryptocurrency-Market-Analysis-Platform',
			description: 'A platform for analyzing the Cryptocurrency market.',
			url: 'https://github.com/peter1998/Cryptocurrency-Market-Analysis-Platform',
			liveUrl: 'https://cryptomarketanalysis.com', // replace with actual live URL
			image: CryptoCurrencyMarket, // replace with actual image URL
			technologies: [
				{ name: 'Python', logo: python },
				{ name: 'pandas', logo: pandas },
				{ name: 'plotly', logo: plotly },
				{ name: 'dash', logo: dash }
				// ... other technologies
			]
		},
		{
			name: 'Vending Machine',
			description: 'A vending machine simulation.',
			url: 'https://github.com/peter1998/vending-maschine',
			liveUrl: 'https://peter1998.github.io/vending-maschine/', // replace with actual live URL
			image: VendingMaschine, // replace with actual image URL
			technologies: [
				{ name: 'Redux', logo: redux },
				{ name: 'React', logo: React },
				{ name: 'Docker', logo: Docker },
				{ name: 'Material Ui', logo: materialUi },
				{ name: 'JavaScript', logo: javaScript }
				// ... other technologies
			]
		}
	];
</script>

<Sidebar />

<Header />

<main>
	<h1>My Projects</h1>
	<p>Here are some of the projects I've worked on:</p>

	<ul class="project-list">
		{#each projects as project (project.name)}
			<li class="project-card">
				<img src={project.image} alt={project.name} class="project-image" />
				<h2>{project.name}</h2>
				<p>{project.description}</p>
				<ul class="project-technologies">
					{#each project.technologies as tech (tech.name)}
						<li class="project-technology">
							<img src={tech.logo} alt={tech.name} class="tech-logo" />
						</li>
					{/each}
				</ul>

				<div class="project-links">
					<a href={project.url} target="_blank" class="project-link">View on GitHub</a>
					<a href={project.liveUrl} target="_blank" class="project-link">Live Site</a>
				</div>
			</li>
		{/each}
	</ul>
</main>

<Footer />

<style>
	.social-links {
		display: flex;
		justify-content: space-around;
		width: 60%; /* Adjust this value to increase or decrease spacing between icons */
	}

	.social-links a {
		color: #fff;
		font-size: 2em; /* Adjust this value to make the icons larger */
		transition: color 0.3s ease;
	}

	.social-links a:hover {
		color: #f1f1f1;
	}

	.social-links .icon.youtube {
		color: #ff0000;
	}

	.social-links .icon.facebook {
		color: #3b5998;
	}

	.social-links .icon.linkedin {
		color: #0e76a8;
	}

	.social-links .icon.github {
		color: #fff;
	}

	.social-links .icon.instagram {
		color: #e1306c;
	}
	nav a {
		color: #fff;
		text-decoration: none;
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

	h1 {
		text-align: center;
	}

	p {
		text-align: center;
	}
	main {
		margin-left: 250px; /* Adjust this value based on the width of your sidebar */
		padding: 20px;
	}

	.project-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
		padding: 0;
		list-style-type: none;
	}

	.project-card {
		background-color: #f5f5f5;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		text-align: center;
		transition: transform 0.3s;
		animation: slideInFromTop 0.5s ease-out;
	}

	.project-card:hover {
		transform: scale(1.05);
	}

	.project-image {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 10px;
	}

	.project-links {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
	}

	.project-link {
		background-color: #333;
		color: #fff;
		text-decoration: none;
		padding: 10px 20px;
		border-radius: 5px;
	}

	.tech-logo {
		width: 30px; /* adjust as needed */
		height: 30px; /* adjust as needed */
		object-fit: contain;
	}

	@keyframes slideInFromLeft {
		0% {
			transform: translateX(-100%);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes slideInFromTop {
		0% {
			transform: translateY(-100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.project-card {
		/* ... existing styles ... */
		animation: slideInFromLeft 0.5s ease-out;
	}

	.project-technologies {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 1rem;
	}

	.project-technology {
		background-color: #fff;
		color: #fff;
		padding: 5px 10px;
		border-radius: 5px;
		margin: 5px;
	}

	.project-details-button {
		background-color: #333;
		color: #fff;
		padding: 10px 20px;
		border-radius: 5px;
		margin-top: 1rem;
		border: none;
		cursor: pointer;
	}
</style>
