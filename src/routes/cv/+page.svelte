<script>
	import Sidebar from '../sidebar/Sidebar.svelte';
</script>

<Sidebar />

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/projects">Projects</a>
	<a href="/cv">CV</a>
</nav>

<main>
	<div class="cv-container">
		<a href="/path-to-your-cv.pdf" download class="download-link">Download my CV</a>
	</div>
</main>

<style>
	body {
		margin: 0;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #000;
		overflow: hidden;
		font-family: Arial, sans-serif;
	}

	@keyframes move {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 100px 50px;
		}
	}

	body:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png');
		animation: move 2s linear infinite;
		z-index: -1;
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
		height: calc(100vh - 20px); /* Subtract the padding */
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
	}

	.cv-container:hover {
		transform: scale(1.05) rotateX(10deg);
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
</style>
