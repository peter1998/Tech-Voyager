<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	onMount(() => {
		AOS.init();
	});
</script>

<nav>
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/cv">CV</a>
	<a href="/contact">Contact</a>
</nav>

<h1>About Me</h1>
<p>
	I'm [Your Name], a software engineer and data scientist. I have a passion for coding and love to
	work on innovative projects.
</p>

<h2>Education</h2>
<p>[Your Education Details]</p>

<h2>Work Experience</h2>
<p>[Your Work Experience]</p>

<h2>Skills</h2>
<div class="skills-section px-3 px-lg-4">
	<h2 class="h3 mb-3">Professional Skills</h2>
	<div class="row">
		<div class="col-md-6">
			<div class="mb-2">
				<span>HTML</span>
				<div class="progress my-1">
					<div
						class="progress-bar bg-primary"
						role="progressbar"
						style="width: 90%"
						aria-valuenow={90}
						aria-valuemin={0}
						aria-valuemax={100}
					/>
				</div>
			</div>
			<div class="mb-2">
				<span>CSS</span>
				<div class="progress my-1">
					<div
						class="progress-bar bg-primary"
						role="progressbar"
						style="width: 85%"
						aria-valuenow={85}
						aria-valuemin={0}
						aria-valuemax={100}
					/>
				</div>
			</div>
			<div class="mb-2">
				<span>JavaScript</span>
				<div class="progress my-1">
					<div
						class="progress-bar bg-primary"
						role="progressbar"
						style="width: 75%"
						aria-valuenow={75}
						aria-valuemin={0}
						aria-valuemax={100}
					/>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="mb-2">
				<span>Adobe Photoshop</span>
				<div class="progress my-1">
					<div
						class="progress-bar bg-success"
						role="progressbar"
						style="width: 80%"
						aria-valuenow={90}
						aria-valuemin={0}
						aria-valuemax={100}
					/>
				</div>
			</div>
			<div class="mb-2">
				<span>Sketch</span>
				<div class="progress my-1">
					<div
						class="progress-bar bg-success"
						role="progressbar"
						style="width: 85%"
						aria-valuenow={85}
						aria-valuemin={0}
						aria-valuemax={100}
					/>
				</div>
			</div>
			<div class="mb-2">
				<span>Adobe XD</span>
				<div class="progress my-1">
					<div
						class="progress-bar bg-success"
						role="progressbar"
						style="width: 75%"
						aria-valuenow={75}
						aria-valuemin={0}
						aria-valuemax={100}
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<h2>Interests</h2>
<p>[Your Interests]</p>

<style>
	nav {
		display: flex;
		justify-content: space-around;
		background-color: #333;
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
</style>
