<script>
	import { onMount } from 'svelte';

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

	onMount(typeWriter);
</script>

<header class="flex justify-around bg-gray-800 p-6 text-white">
	<a href="/" class="hover:text-gray-300">
		<img src="/public/images/logo.PNG" alt="Logo" class="logo-image" />
	</a>
	<nav>
		<a href="/" class="hover:text-gray-300">Home</a>
		<a href="/about" class="hover:text-gray-300">About</a>
		<a href="/projects" class="hover:text-gray-300">Projects</a>
		<a href="/cv" class="hover:text-gray-300">CV</a>
		<a href="/contact" class="hover:text-gray-300">Contact</a>
	</nav>
	<a href="tel:(359)0888187905" class="text-lg font-semibold hover:text-gray-300"
		>(359) 0888187905</a
	>
</header>

<main>
	<section
		class="hero text-center py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-800"
	>
		<h1 class="text-4xl mb-4">Hello, I'm Peter Matov</h1>
		<div class="typing-container text-xl mb-8 mx-auto">
			<p id="demo" />
		</div>
		<a href="/projects" class="cta bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200"
			>View My Projects</a
		>
	</section>

	<section class="skills text-center py-20 bg-gray-200 text-gray-800 p-6">
		<h2 class="text-3xl mb-4">My Skills</h2>
		<ul class="list-none p-0">
			<li class="mb-2">
				Software Engineering
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style="width: 80%;"
						aria-valuenow={80}
						aria-valuemin={0}
						aria-valuemax={100}
					>
						80%
					</div>
				</div>
			</li>
			<li class="mb-2">
				Data Science
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style="width: 70%;"
						aria-valuenow={70}
						aria-valuemin={0}
						aria-valuemax={100}
					>
						70%
					</div>
				</div>
			</li>
			<li class="mb-2">
				Machine Learning
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style="width: 90%;"
						aria-valuenow={90}
						aria-valuemin={0}
						aria-valuemax={100}
					>
						90%
					</div>
				</div>
			</li>
			<li class="mb-2">Python</li>
			<!-- Add more skills here -->
		</ul>
	</section>

	<section class="projects text-center py-20 bg-gray-900 text-gray-800">
		<h2 class="text-3xl mb-4">Recent Projects</h2>
		<!-- We'll add code to display your projects here later -->
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

<footer class="text-center py-6 bg-gray-800 text-white">
	<a href="tel:(359)0888187905" class="text-lg font-semibold hover:text-gray-300"
		>(359) 0888187905</a
	>
</footer>

<style>
	header,
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #333;
		color: #fff;
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
		width: 30em;
		white-space: nowrap;
		overflow: hidden;
		border-right: 0.15em solid orange;
		margin: 0 auto; /* Center the container */
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

	.cta:hover {
		transform: scale(1.05);
		transition: transform 0.3s ease-in-out;
	}

	.logo-image {
		height: 100px;
		width: auto;
	}
</style>
