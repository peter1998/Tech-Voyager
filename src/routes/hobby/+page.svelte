<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '../sidebar/Sidebar.svelte';

	let sections = [
		{
			title: 'Problem Solving - Mountain Hiking',
			content: `Mountain hiking has taught me the importance of problem-solving and adaptability. When faced with a difficult trail or unexpected weather conditions, I've learned to think on my feet and make quick decisions.`,
			image: '/path/to/problem_solving.jpg',
			showImage: false
		},
		{
			title: 'Teamwork - Group Hiking',
			content: `Hiking often involves teamwork, especially on more challenging trails. I've learned to work effectively in a team, communicate clearly, and support others when they're struggling.`,
			image: '/path/to/teamwork.jpg',
			showImage: false
		},
		{
			title: 'Attention to Detail - Mountain Photography',
			content: `Photographing the mountains has honed my attention to detail. I've learned to notice small details in the landscape and capture them in a way that tells a story.`,
			image: '/path/to/attention_to_detail.jpg',
			showImage: false
		},
		{
			title: 'Sustainability - Mountain Conservation',
			content: `My interest in mountain conservation has made me passionate about sustainability. I strive to incorporate sustainable practices into my work and personal life.`,
			image: '/path/to/sustainability.jpg',
			showImage: false
		}
	];

	function toggleImage(index) {
		sections[index].showImage = !sections[index].showImage;
	}

	let backgroundImage = '/public/images/Mountains/Vitosha.jpeg';

	onMount(() => {
		document.body.style.backgroundImage = `url(${backgroundImage})`;
		document.body.style.backgroundSize = 'cover';
	});
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

	button {
		background-color: #008cba; /* Blue */
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 4px;
		transition-duration: 0.4s;
	}

	button:hover {
		background-color: white;
		color: black;
		border: 2px solid #008cba;
	}

	.loading-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #333;
		color: #fff;
		font-size: 2em;
		background-size: cover;
	}

	.loading-screen::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
	}

	@keyframes climb {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(-100%);
		}
	}
</style>
