<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import Footer from '$lib/Footer.svelte';

	import Logo from './../../public/images/logo.jpg';
	import JupyterLogo from './../../public/images/logos/jupyter-logo.png';
	import TfLogo from './../../public/images/logos/tf_logo.png';
	import PandasLogo from './../../public/images/logos/pandas.png';

	let backgroundImage = '/images/Mountains/Vitosha.jpeg';
	let loaderElement;

	let i = 0;
	let txts = [
		"I'm Peter Matov, a software engineer and data scientist.",
		'I specialize in developing high-performance applications',
		'and leveraging data to drive business outcomes.',
		'Welcome to my personal website where you can learn more',
		'about my projects, skills and interests.'
	];
	let txtIndex = 0;
	let speed = 90; /* The speed/duration of the effect in milliseconds */
	let loading = true;
	let showAnimation = true; // New variable to control the display of the animation

	onMount(() => {
		if (typeof window !== 'undefined') {
			function typeWriter() {
				const demoElement = document.getElementById('demo');
				if (demoElement) {
					if (i < txts[txtIndex].length) {
						demoElement.innerHTML += txts[txtIndex].charAt(i);
						i++;
						setTimeout(typeWriter, speed);
					} else {
						i = 0;
						txtIndex = (txtIndex + 1) % txts.length;
						demoElement.innerHTML = '';
						setTimeout(typeWriter, 1000);
					}
				}
			}

			setTimeout(() => {
				loading = false;
				typeWriter();
				showAnimation = false; // Stop showing the animation after loading
			}, 4000); // delay for 2 seconds to simulate loading

			// Hide the loader after 3 seconds
			setTimeout(() => {
				if (loaderElement) {
					loaderElement.style.display = 'none';
				}
			}, 3000);
		}

		document.body.style.backgroundImage = `url(${backgroundImage})`;
		document.body.style.backgroundSize = 'cover';
	});

	let projects = [
		{
			name: 'Deep Learning Lab files for Chest X-Ray.',
			description: 'WorkShop-Deep-Learning-Lab_files_ChestX_Ray',
			url: 'https://github.com/peter1998/WorkShop-Deep-Learning-Lab_files_ChestX_Ray',
			liveUrl: 'https://github.com/peter1998/WorkShop-Deep-Learning-Lab_files_ChestX_Ray'
		}
		// Add more projects here...
	];
</script>

<div class="loader" bind:this={loaderElement} />

<header class="flex justify-around bg-gray-800 p-6 text-white">
	<a href="/" class="hover:text-gray-300">
		<img src={Logo} alt="Logo" class="logo-image" />
	</a>
	<nav>
		<a href="/about" class="hover:text-gray-300">About</a>
		<a href="/projects" class="hover:text-gray-300">Projects</a>
		<a href="/cv" class="hover:text-gray-300">CV</a>
		<a href="/contact" class="hover:text-gray-300">Contact</a>
	</nav>
	<a href="/contact" class="text-lg font-semibold hover:text-gray-300 text-white">(359) 888187905</a
	>
</header>

<main transition:fade={{ delay: 1000, duration: 500 }}>
	<section
		class="hero text-center py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-800"
	>
		<h1 class="text-4xl mb-4">Hello, I'm Peter Matov</h1>
		<div class="typing-container text-xl mb-8 mx-auto">
			<p id="demo" />
		</div>
		<a href="/projects" class="cta bg-white text-black py-2 px-4 rounded hover:bg-gray-200"
			>View My Projects</a
		>
	</section>

	<section class="skills text-center py-20 bg-gray-200 text-gray-800 p-6">
		<h2 class="text-3xl mb-4">My Skills</h2>
		<ul class="list-none p-0">
			<li class="mb-6">
				<div class="skill-title">Software Engineering</div>
				<div class="progress">
					<div class="progress-bar" style="width: 80%;" aria-valuenow="80">
						<span class="progress-value">80%</span>
					</div>
				</div>
			</li>
			<li class="mb-6">
				<div class="skill-title">Data Science</div>
				<div class="progress">
					<div class="progress-bar" style="width: 20%;" aria-valuenow="20">
						<span class="progress-value">20%</span>
					</div>
				</div>
			</li>
			<li class="mb-6">
				<div class="skill-title">Machine Learning</div>
				<div class="progress">
					<div class="progress-bar" style="width: 20%;" aria-valuenow="20">
						<span class="progress-value">20%</span>
					</div>
				</div>
			</li>
			<li class="mb-6">
				<div class="skill-title">Design Principles</div>
				<div class="progress">
					<div class="progress-bar" style="width: 40%;" aria-valuenow="40">
						<span class="progress-value">40%</span>
					</div>
				</div>
			</li>
			<li class="mb-6">
				<div class="skill-title">Databases</div>
				<div class="progress">
					<div class="progress-bar" style="width: 70%;" aria-valuenow="70">
						<span class="progress-value">70%</span>
					</div>
				</div>
			</li>
			<li class="mb-6">
				<div class="skill-title">Agile Development</div>
				<div class="progress">
					<div class="progress-bar" style="width: 60%;" aria-valuenow="60">
						<span class="progress-value">60%</span>
					</div>
				</div>
			</li>
			<!-- Add more skills here -->
		</ul>
	</section>

	<section class="projects py-20 text-black">
		<h2 class="text-3xl mb-4 text-center font-bold">Recent Project</h2>
		<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects as project (project.name)}
				<li class="card p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-200">
					<a href={project.url} class="text-xl font-bold hover:text-gray-300 text-white">
						{project.name}
					</a>
					<p class="text-gray-300 font-semibold">{project.description}</p>
					<p class="text-gray-300 font-semibold">Technologies used:</p>
					<div class="tech-logos">
						<div class="logo-container">
							<img src={JupyterLogo} alt="Jupyter Notebook" class="tech-logo" />
						</div>
						<div class="logo-container">
							<img src={TfLogo} alt="TensorFlow" class="tech-logo" />
						</div>
						<div class="logo-container">
							<img src={PandasLogo} alt="Pandas" class="tech-logo" />
						</div>
					</div>
					<a
						href={project.liveUrl}
						class="cta mt-4 inline-block bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200"
					>
						View Live
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<section class="cta text-center py-20 bg-gray-800 text-gray-800">
		<h2 class="text-3xl mb-4">Interested in working together?</h2>
		<a href="/contact" class="cta bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200 mr-4"
			>Contact Me</a
		>
		<a href="/cv" class="cta bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200"
			>View My CV</a
		>
	</section>
</main>

<Footer />

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #9be2d5;
		color: #fff !important;
		padding: 10px;
	}

	nav a {
		color: #fff;
		text-decoration: none;
		margin-right: 10px;
	}

	a {
		display: inline-block;
		margin-top: 10px;
		padding: 10px 20px;
		background-color: #333;
		color: #333;
		text-decoration: none;
		border-radius: 5px;
		margin-right: 10px;
	}

	.typing-container {
		width: 50em;
		white-space: nowrap;
		overflow: hidden;
		border-right: 0.15em solid orange;
		margin: 0 auto; /* Center the container */
		color: #000; /* Make the text black */
		font-size: 1.5em; /* Increase the size of the text */
		font-weight: bold; /* Make the text bold */
		text-shadow: 2px 2px 4px #000000; /* Apply a subtle shadow to the text */
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes gradientAnimation {
		0% {
			background: linear-gradient(45deg, #00c3ff, #ffff1c, #ff0080);
			background-size: 400% 400%;
			background-position: 0% 50%;
		}

		50% {
			background: linear-gradient(45deg, #ff0080, #00c3ff, #ffff1c);
			background-size: 400% 400%;
			background-position: 100% 50%;
		}

		100% {
			background: linear-gradient(45deg, #ffff1c, #ff0080, #00c3ff);
			background-size: 400% 400%;
			background-position: 0% 50%;
		}
	}

	.hero {
		animation: gradientAnimation 30s linear infinite;
	}

	.cta {
		margin-top: 10px;
		padding: 10px 15px;
		background-color: #b57edc;
		color: black;
		text-decoration: none;
		border-radius: 5px;
		margin-right: 10px;
		transition: all 0.3s ease-in-out;
	}

	.cta:hover {
		background-color: #008080;
		color: gold;
		transform: scale(1.05);
	}

	.projects,
	.skills,
	.cta {
		background-color: #2d3748;
		color: black;
		padding: 10px;
	}

	.projects h2,
	.skills h2,
	.cta h2,
	.projects p,
	.skills p,
	.cta p {
		color: white;
	}

	.projects a,
	.skills a,
	.cta a {
		color: black;
		background-color: transparent;
		text-decoration: none;
		border-radius: 5px;
		padding: 10px 15px;
		transition: all 0.3s ease-in-out;
	}

	.projects:hover,
	.skills:hover {
		background-color: #008080;
	}

	.projects a:hover,
	.skills a:hover,
	.cta a:hover {
		color: gold;
	}

	.logo-image {
		height: 100px;
		width: auto;
	}

	.loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url('/gif/Matrix-1.1s-1084px.gif') center center no-repeat;
		background-size: cover;
		z-index: 9999;
	}

	.skill-title {
		font-weight: bold;
		margin-bottom: 8px;
	}

	.progress {
		background-color: #f5f5f5;
		border-radius: 4px;
		height: 20px;
		overflow: hidden;
	}

	.progress-bar {
		background-color: #4c51bf;
		color: #fff;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		transition: width 0.3s ease-in-out;
		position: relative;
	}

	.progress-value {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		color: #fff;
		font-size: 14px;
		line-height: 20px;
	}

	.tech-logos {
		display: flex;
		justify-content: center;
		gap: 20px;
	}

	.logo-container {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tech-logo {
		max-width: 100%;
		max-height: 100%;
	}

	.text-xl,
	.font-semibold {
		font-weight: bold;
		color: #fff;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.projects,
	.skills,
	.projects .card {
		transition: all 0.3s ease-in-out;
	}

	.projects:hover,
	.skills:hover {
		background-color: #008080; /* change this to the color you want */
		color: gold;
		transform: scale(1.05);
	}

	.projects .card:hover {
		background-color: #008080; /* change this to the color you want */
		color: gold;
		transform: scale(1.05);
	}

	.projects:hover a,
	.skills:hover a,
	.projects .card:hover a {
		color: gold;
	}

	.card {
		background-color: #2d3748;
		transition: all 0.3s ease-in-out;
	}

	.card:hover {
		background-color: #008080;
		color: gold;
		transform: scale(1.05);
	}
	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2rem;
		}

		.typing-container {
			width: 90%;
			font-size: 1.2em;
		}

		.skills ul {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.projects ul {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	@media (max-width: 460px) {
		header {
			flex-direction: column;
			align-items: flex-start;
		}

		header .logo-image {
			display: none;
		}

		nav {
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}
</style>
