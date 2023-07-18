<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { onMount, afterUpdate } from 'svelte';
	import Sidebar from '../sidebar/Sidebar.svelte';

	let index = 0;
	const images = ['/public/images/Sucess/deer-load.jpg', '/public/images/Sucess/deer.jpg'];

	function changeBackground() {
		index = (index + 1) % images.length;
		document.querySelector('.wip-container').style.backgroundImage = `url(${images[index]})`;
	}

	onMount(() => {
		setInterval(changeBackground, 3600); // Change every 5 seconds
	});

	afterUpdate(changeBackground);
</script>

<Header />

<div class="wip-container">
	<h1>Work in Progress</h1>
	<p>
		We're working hard to bring you the Trail Cameras Monitoring Wildlife page. Check back soon!
	</p>
</div>

<Sidebar />

<style>
	.wip-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh; /* take the full viewport height */
		text-align: center;
		background-color: #f5f5f5;
		background-image: url(/public/images/Sucess/deer-load.jpg); /* Initial image */
		background-size: cover; /* Cover the entire container */
		background-position: center; /* Center the image */
		transition: background-image 2s ease-in-out; /* Smooth transition between images */
	}

	.wip-container h1 {
		font-size: 3em;
		color: #fff;
	}

	.wip-container p {
		font-size: 1.2em;
		color: #fff;
	}
</style>
