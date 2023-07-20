<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '../sidebar/Sidebar.svelte';

	let climb_me = '/images/Sucess/climb_me.jpg';
	let musala_vuje = '/images/Sucess/musala_vuje.jpg';
	let rila = '/images/Sucess/rila.jpg';
	let musa = '/images/Sucess/musa.jpg';
	let musala_skakavci = '/images/Sucess/musala_skakavci.jpg';

	let climb_vesko = '/images/Sucess/climb_vesko.jpg';
	let climb_vesko2 = '/images/Sucess/climb_vesko2.jpg';
	let musala_izgrev = '/images/Sucess/musala_izgrev.jpg';

	let ciconia_nigra = '/images/Sucess/ciconia_nigra.jpg';
	let real_ciconia = '/images/Sucess/real_ciconia.jpg';
	let orel = '/images/Sucess/orel.jpg';
	let plato = '../../../public/images/Sucess/plato.JPG';

	let rusamski_livadi = '/images/Sucess/rusamski_livadi.jpg';
	let beli_vruh = '/images/Sucess/beli_vruh.jpg';
	let bike = '/images/Sucess/bike.jpg';

	let sections = [
		{
			title: 'Problem Solving - Mountain Hiking',
			content: `Just like debugging a complex piece of code, mountain hiking has taught me the critical importance of problem-solving and adaptability. Confronted with a difficult trail or unexpected weather conditions, I've learned to evaluate my situation, consider various solutions, and make quick, informed decisions. This adaptability has proven invaluable in my coding career, enabling me to efficiently navigate through challenging problems and deliver effective solutions. Furthermore, both hiking and coding require a keen analytical mind. When facing a steep climb or a complex coding problem, I break down the challenge into manageable parts, tackling each step or bug one at a time. This systematic approach helps me overcome obstacles and continuously move forward.`,
			images: [climb_me, musala_vuje, rila, musa, musala_skakavci],
			currentImageIndex: 0,
			showImage: false
		},
		{
			title: 'Teamwork - Group Hiking',
			content: `Hiking often involves teamwork, especially on more demanding trails. The importance of clear communication, shared responsibilities, and mutual support in a group hike parallels the dynamics of an effective dev team. I've honed my ability to collaborate closely with others, ensuring we're all moving towards the same goal, just like working on a complex software project. Additionally, in both scenarios, trust plays a vital role. On the trail or in a team project, I've learned that trusting my team's abilities and judgment leads to a more cohesive group dynamic and ultimately a more successful outcome. Group hiking has also taught me the importance of diversity in a team. Just as a diverse group of hikers can tackle a wide range of terrains, a diverse team of developers can bring a wider range of solutions and perspectives to a project.`,
			images: [climb_vesko, climb_vesko2, musala_izgrev],
			showImage: false
		},
		{
			title: 'Attention to Detail - Mountain Photography',
			content: `Photographing the mountains has fine-tuned my attention to detail, a crucial skill in software development. From capturing the subtle play of light on a landscape to noticing the intricate patterns in the bark of a tree, my photography experience has trained me to observe and appreciate the smallest details. In programming, this has translated into writing cleaner code, catching bugs early, and improving user experience with nuanced improvements. Similarly, both fields require a certain level of creativity. Whether I'm framing a shot or designing a software solution, I constantly strive to bring a unique and creative approach to my work. The patience and perseverance required in capturing the perfect shot mirrors the dedication needed to refine a piece of code, enhancing its efficiency and readability.`,
			images: [ciconia_nigra, real_ciconia, orel, plato],
			showImage: false
		},
		{
			title: 'Sustainability - Mountain Conservation',
			content: `My interest in mountain conservation has sparked a passion for sustainability, a concept I incorporate into my work and personal life. In coding, this translates into writing efficient, maintainable code and advocating for sustainable tech practices, like reducing energy consumption and electronic waste. I believe that as tech professionals, we have a responsibility to ensure the digital world is as sustainable as the world we want to enjoy while hiking. Beyond code, I aim to foster a sustainable work environment by promoting practices like regular breaks and work-life balance, which I believe contribute to long-term productivity and employee wellness. I am committed to creating software solutions that not only meet the present needs of users but also consider the long-term impact on the environment and society.`,
			images: [rusamski_livadi, beli_vruh, bike],
			showImage: false
		}
	];

	function changeImage(index) {
		sections[index].currentImageIndex =
			(sections[index].currentImageIndex + 1) % sections[index].images.length;
		console.log(
			`Section ${index} image source: ${sections[index].images[sections[index].currentImageIndex]}`
		);
		sections = sections; // reassign sections to trigger reactivity
	}

	function toggleImage(index) {
		sections[index].showImage = !sections[index].showImage;
		if (sections[index].showImage && typeof sections[index].currentImageIndex === 'undefined') {
			sections[index].currentImageIndex = 0;
		}
		if (sections[index].showImage) {
			changeImage(index);
		}
		sections = [...sections]; // reassign sections to trigger reactivity
	}

	let backgroundImage = '/images/Mountains/Vitosha.jpeg';

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
			<div class="section-content-and-image">
				<p class="section-content">{section.content}</p>
				{#if section.showImage}
					<div class="section-image">
						<img src={section.images[section.currentImageIndex]} alt={section.title} />
						<button on:click={() => changeImage(index)}>Change Picture</button>
					</div>
				{/if}
			</div>
			<button on:click={() => toggleImage(index)}>
				{section.showImage ? 'Hide Picture' : 'Show Picture'}
			</button>
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
		flex: 1;
		margin-right: 10px;
		line-height: 1.5;
		margin-bottom: 10px;
	}

	.section-image {
		flex: 0 0 50%; /* This makes the image container take up half the width */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.section-image img {
		width: 100%; /* Make the image take up the full width of its container */
		height: auto;
		object-fit: cover;
	}

	.section-image button {
		margin-top: 10px; /* Add some spacing between image and button */
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
		position: relative;
		background-color: #008cba;
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
		transition: all 0.4s; /* transition on all properties */
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* shadow for 3D effect */
		overflow: hidden;
	}

	button:hover {
		background-color: white;
		color: black;
		border: 2px solid #008cba;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* less shadow on hover for press effect */
	}

	button:after {
		content: '';
		background: #f1f1f1;
		display: block;
		border-radius: 100%;
		position: absolute;
		padding-top: 300%;
		padding-left: 350%;
		margin-left: -20px !important;
		margin-top: -120%;
		opacity: 0;
		transition: all 2s;
	}

	button:active:after {
		padding: 0;
		margin: 0;
		opacity: 1;
		transition: 0s;
	}

	@keyframes climb {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(-100%);
		}
	}

	.section:hover {
		transform: scale(1.02);
		transition: transform 0.3s ease;
	}

	.section-content-and-image {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
</style>
