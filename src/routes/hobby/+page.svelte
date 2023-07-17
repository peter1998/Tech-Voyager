<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '../sidebar/Sidebar.svelte';

	let sections = [
		{
			title: 'Bulgarian Mountains',
			content: `Bulgaria is home to several mountain ranges that offer breathtaking views and challenging hikes. From the Balkan Mountains to the Rhodopes, each range has its unique characteristics and trails.`,
			image: '/path/to/bulgarian_mountains.jpg',
			showImage: false
		},
		{
			title: 'Mountain Hiking',
			content: `Mountain hiking is a great way to enjoy the natural beauty of Bulgaria. It provides a physical challenge and the reward of stunning views from the top.`,
			image: '/path/to/mountain_hiking.jpg',
			showImage: false
		},
		{
			title: 'Mountain Gear',
			content: `Proper gear is essential for a safe and enjoyable mountain hiking experience. This includes appropriate clothing, hiking boots, a backpack, and navigation tools.`,
			image: '/path/to/mountain_gear.jpg',
			showImage: false
		},
		{
			title: 'Mountain Photography',
			content: `Mountain photography allows you to capture the majestic beauty of the mountains. It's a great way to share your experiences and the stunning landscapes you encounter during your hikes.`,
			image: '/path/to/mountain_photography.jpg',
			showImage: false
		},
		{
			title: 'Mountain Conservation',
			content: `Mountain conservation is crucial to preserving these natural wonders for future generations. It involves protecting the wildlife, maintaining the trails, and promoting sustainable tourism practices.`,
			image: '/path/to/mountain_conservation.jpg',
			showImage: false
		}
	];

	function toggleImage(index) {
		sections[index].showImage = !sections[index].showImage;
	}
</script>

<Header />

<Sidebar />

<div class="container">
	{#each sections as section, index (index)}
		<div class="section" style="animation-delay: {index * 0.5}s">
			<h2 class="section-title">{section.title}</h2>
			<p class="section-content">{section.content}</p>
			{#if section.showImage}
				<div class="section-image">
					<img src={section.image} alt={section.title} />
				</div>
			{/if}
			<button on:click={() => toggleImage(index)}
				>{section.showImage ? 'Hide Picture' : 'Show Picture'}</button
			>
		</div>
	{/each}
</div>

<Footer />

<style>
	/* Add your custom styles here */
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	.section {
		margin-bottom: 20px;
		padding: 20px;
		background-color: #f5f5f5;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		animation: fadeIn 1s ease-in-out forwards;
		opacity: 0;
	}

	.section-title {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.section-content {
		line-height: 1.5;
		margin-bottom: 10px;
	}

	.section-image {
		width: 100%;
	}

	.section-image img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
