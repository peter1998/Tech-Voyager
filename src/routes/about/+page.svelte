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

<main>
	<section>
		<h1>About Me</h1>
		<div style="display: flex; align-items: center;">
			<div style="flex: 1;">
				<ul>
					<li>Name: Peter Matov</li>
					<li>Email: <a href="mailto:pmatov@gmail.com">pmatov@gmail.com</a></li>
					<li>Phone: (359) - 088818 7905</li>
					<li>Date of birth: 19 November 1998</li>
					<li>Address: Europe Sofia, Bulgaria</li>
					<li>Nationality: Bulgarian</li>
				</ul>
			</div>
			<div style="flex: 1;">
				<!-- Add your photo here -->
				<img src="../../../public/images/9.PNG" alt="Your Name" style="max-width: 100%;" />
			</div>
		</div>
		<div class="animated-text">
			I'm Peter Matov, a software engineer and data scientist. I have a passion for coding and love
			to work on innovative projects.
		</div>
	</section>

	<section>
		<h2>Education</h2>
		<div class="education-con">
			<div class="container-sub">
				<div class="full-divider" />
				<div class="row">
					<div class="education-details" style="position: relative;">
						<div class="col-3 icon-block" style="position: absolute; top: -50px;">
							<img
								src="../../../../../public/images/Tu-sofia-logo.svg.png"
								alt="Technical University of Sofia logo"
								style="width: 50px; height: 50px;"
							/>
						</div>
						<div class="col-6 margin-bottom50 margin-top50">
							<div class="flot-left equal-div">
								<h5>Technical University of Sofia</h5>
								<h4>Doctor of Artificial Intelligence, Artificial Intelligence</h4>
								<span>Mar 2023 - Jul 2027</span>
							</div>
						</div>
						<div class="col-6 margin-bottom50 margin-top50 no-margin-top equal-div">
							Skills: Deep Learning · Anaconda · Python (Programming Language) · Artificial
							Intelligence (AI) · Machine Learning
							<br />
							Activities and societies: Java Script, React.js, React-Native , Web3.0 , Solidity, Ethereum
						</div>
					</div>
					<div class="full-divider black-border" />
					<div class="education-details">
						<div class="col-6 margin-bottom50 margin-top50">
							<div class="flot-left equal-div">
								<h5>Technical University of Sofia</h5>
								<h4>Master's degree, Computer Software Engineering</h4>
								<span>Oct 2021 - Aug 2022</span>
							</div>
						</div>
						<div class="col-6 margin-bottom50 margin-top50 no-margin-top equal-div">
							Activities and societies: Python Computer Vision, Java Spring Boot Technology, ASP.
							Net Projects with Full Stack, Semantic Web, Interface of common language
						</div>
					</div>
					<div class="full-divider black-border" />
					<div class="education-details">
						<div class="col-6 margin-bottom50 margin-top50">
							<div class="flot-left equal-div">
								<h5>Technical University of Sofia</h5>
								<h4>Bachelor's degree, Telecommunications Technology/Technician</h4>
								<span>Sep 2017 - Jul 2021</span>
							</div>
						</div>
						<div class="col-6 margin-bottom50 margin-top50 no-margin-top equal-div">
							<!-- Add description here if needed -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<h2>Work Experience</h2>
		<p>
			Full Stack Developer at SoftZen, Sofia City, Bulgaria (03/2022 - Present) Developer Intern at
			OneBit Software, Sofia City, Bulgaria (09/2021 - 12/2021)
		</p>
	</section>

	<section>
		<h2>Skills</h2>
		<div class="skills-section px-3 px-lg-4">
			<h2 class="h3 mb-3">Software Engineer</h2>
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
								aria-valuenow="85"
								aria-valuemin="0"
								aria-valuemax="100"
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
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
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
								aria-valuenow="80"
								aria-valuemin="0"
								aria-valuemax="100"
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
								aria-valuenow="85"
								aria-valuemin="0"
								aria-valuemax="100"
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
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<h2>Interests</h2>
		<p>
			Following: Lex Fridman, Richard Branson, Gary Vaynerchuk, Laszlo Bock, Andrew Huberman, Simon
			Sinek
		</p>
	</section>
</main>

<style>
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
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	section {
		margin-bottom: 40px;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	p {
		margin-bottom: 0.5rem;
	}

	.skills-section {
		background-color: #f5f5f5;
		border-radius: 4px;
		padding: 1rem;
	}

	.progress {
		height: 8px;
		border-radius: 4px;
		overflow: hidden;
	}

	.progress-bar {
		height: 100%;
	}

	ul {
		padding-left: 20px;
	}

	.education-con {
		margin-top: 40px;
	}

	.container-sub {
		padding: 0 15px;
	}

	.full-divider {
		width: 100%;
		height: 2px;
		background-color: #f5f5f5;
		margin: 20px 0;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
	}

	.education-details {
		display: flex;
		margin-bottom: 30px;
	}

	.col-6 {
		width: 50%;
		padding-right: 15px;
		padding-left: 15px;
	}

	.margin-bottom50 {
		margin-bottom: 50px;
	}

	.margin-top50 {
		margin-top: 50px;
	}

	.no-margin-top {
		margin-top: 0 !important;
	}

	.icon-block {
		font-size: 36px;
		color: #3498db;
		transition: font-size 0.3s, color 0.3s;
	}

	.icon-block:hover {
		font-size: 48px;
		color: orange;
	}

	.equal-div {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.black-border {
		border-top: 2px solid black;
	}

	h5 {
		margin-bottom: 0;
	}

	h4 {
		margin-top: 5px;
		margin-bottom: 10px;
		font-weight: bold;
	}

	.animated-text {
		font-size: 15px;
		width: 111%;
		color: #fff;
		white-space: nowrap;
		overflow: hidden;
		transform: translateY(-50%);
		background: black;
		position: relative;
		box-sizing: border-box;
		padding: 20px;
	}

	.animated-text::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
		transform: translateX(-100%);
		animation: speak 2s linear infinite;
	}

	@keyframes speak {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
</style>
