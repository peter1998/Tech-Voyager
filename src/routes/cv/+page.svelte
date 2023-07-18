<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '../sidebar/Sidebar.svelte';
	import { onMount } from 'svelte';

	import meBike from '/public/images/Me/me-bike.jpg';
	import meIztok from '/public/images/Me/me-iztok.jpg';
	import yoda from '/public/images/yoda.jpg';

	let images = [meBike, meIztok, yoda];
	let currentImageIndex = 0;

	onMount(() => {
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}, 3000); // Change image every 3 seconds

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="background">
	<Sidebar />

	<Header />

	<main>
		<div class="cv-container" style="background-image: url({images[currentImageIndex]})">
			<div class="download-container">
				<a href="../../../public/cv-holder/Petar's IT Resume.pdf" download class="download-link"
					>Download my CV</a
				>
			</div>
			<div class="dots">
				{#each images as image, index}
					<span class="dot" class:selected={index === currentImageIndex} />
				{/each}
			</div>
		</div>
	</main>
</div>

<Footer />

<style>
	@keyframes move {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100px 50px;
		}
	}

	.background:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/public/images/cv/cv-background.jpeg');
		animation: move 2s linear infinite;
		z-index: -1;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

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

	main {
		margin-left: 250px; /* Adjust this value based on the width of your sidebar */
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 70px); /* Subtract the padding */
	}

	.cv-container {
		text-align: center;
		width: 600px; /* Adjust as needed */
		height: 400px; /* Adjust as needed */
		padding: 20px;
		background-image: url('/public/images/yoda.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		transform: scale(1);
		transition: transform 0.3s ease;
		perspective: 1000px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.cv-container:hover {
		transform: scale(1.05) rotateX(10deg);
	}

	.download-container {
		margin-top: 50%; /* 2/5 from the top */
		margin-left: 30%; /* 1/5 to the right from the center */
	}

	.download-link {
		display: inline-block;
		padding: 10px 20px;
		background-color: #333;
		color: #fff;
		text-decoration: none;
		border-radius: 5px;
		margin-top: 20px;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}

	.dots {
		position: absolute;
		bottom: 10px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dot {
		height: 15px;
		width: 15px;
		margin: 0 2px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.6s ease;
	}

	.dot.selected {
		background-color: #717171;
	}
	@keyframes move {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100px 50px;
		}
	}

	@media (min-width: 768px) {
		.cv-container {
			width: 600px;
			height: 400px;
		}

		main {
			margin-left: 250px;
		}
	}

	/* CSS for smaller screens */
	@media (max-width: 767px) {
		.background {
			display: flex;
			flex-direction: column;
			height: 100vh;
			justify-content: space-between;
		}

		main {
			margin-left: 0;
			height: auto;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.cv-container {
			width: 100%;
			height: auto;
			padding: 10px;
		}
	}
</style>
