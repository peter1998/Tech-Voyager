<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import Sidebar from '../sidebar/Sidebar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	import ProfilePicture from '../../../public/images/9.jpg';
	import TuSofiaLogo from '../../../public/images/Tu-sofia-logo.svg.png';
	import LexFridman from '../../../public/images/lex-2.jpg';
	import TonyRobinson from '../../../public/images/tony-robinson.jpg';
	import GaryVaynerchuk from '../../../public/images/gary.jpg';
	import LaszloBock from '../../../public/images/lazlo.jpg';
	import AndrewHuberman from '../../../public/images/andrew.jpg';
	import SimonSinek from '../../../public/images/simon-sinek.jpg';

	onMount(() => {
		AOS.init();
	});
</script>

<Sidebar />
<Header />

<main>
	<section class="about-me">
		<h1>About Me</h1>
		<div style="display: flex; align-items: center;">
			<div style="flex: 1;">
				<ul>
					<li>Name: Peter Matov</li>
					<li>Email: <a href="mailto:pmatov@gmail.com">pmatov@gmail.com</a></li>
					<li>Phone: (359) 88818 7905</li>
					<li>Date of birth: 19 November 1998</li>
					<li>Address: Sofia, Bulgaria</li>
					<li>Nationality: Bulgarian</li>
				</ul>
			</div>
			<div style="flex: 1;">
				<!-- Add your photo here -->
				<img src={ProfilePicture} alt="Your Name" style="max-width: 100%;" />
			</div>
		</div>
		<div class="animated-text">
			I'm Peter Matov, a software engineer and data scientist. I have a passion for coding and love
			to work on innovative projects.
		</div>
	</section>

	<section>
		<h2 class="white-bold">Education</h2>
		<div class="education-con">
			<div class="container-sub">
				<div class="full-divider" />
				<div class="row">
					<div class="education-details" style="position: relative;">
						<div class="col-3 icon-block" style="position: absolute; top: -20px;">
							<img
								src={TuSofiaLogo}
								alt="Technical University of Sofia logo"
								style="width: 50px; height: 50px;"
							/>
						</div>
						<div class="col-6 margin-bottom50 margin-top50">
							<div class="flot-left equal-div">
								<h5>Technical University of Sofia</h5>
								<h4>PhD Student on Artificial Intelligence</h4>
								<span>March 2023 - July 2027</span>
							</div>
						</div>
						<div class="col-6 margin-bottom50 margin-top50 no-margin-top equal-div">
							<h2 class="bold-section">Skills:</h2>
							Deep Learning · Anaconda · Python (Programming Language) · Artificial Intelligence (AI)
							· Machine Learning
							<br />
							<h2 class="bold-section">Activities and societies</h2>
							Java Script, React.js, React-Native , Web3.0 , Solidity, Ethereum
						</div>
					</div>
					<div class="full-divider black-border" />
					<div class="education-details">
						<div class="col-6 margin-bottom50 margin-top50">
							<div class="flot-left equal-div">
								<h5>Technical University of Sofia</h5>
								<h4>Master's degree, Computer Software Engineering</h4>
								<span>October 2021 - August 2022</span>
							</div>
						</div>
						<div class="col-6 margin-bottom50 margin-top50 no-margin-top equal-div">
							<h2 class="bold-section">Activities and societies</h2>
							Python Computer Vision, Java Spring Boot Technology, ASP. Net Projects with Full Stack,
							Semantic Web, Interface of common language
						</div>
					</div>
					<div class="full-divider black-border" />
					<div class="education-details">
						<div class="col-6 margin-bottom50 margin-top50">
							<div class="flot-left equal-div">
								<h5>Technical University of Sofia</h5>
								<h4>Bachelor's degree, Telecommunications Technology/Technician</h4>
								<span>September 2017 - July 2021</span>
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

	<section class="work-experience">
		<h2>Work Experience</h2>
		<div class="job-card">
			<div class="job-header">
				<h3>Full Stack Developer</h3>
				<h4>SoftZen</h4>
				<p class="date">03/2022 - Present, Sofia City, Bulgaria (Remote)</p>
			</div>
			<p class="job-description">
				Soft Zen excels in creating custom mobile, web, and desktop apps using top platforms and
				frameworks for superb performance and user experiences.
			</p>
			<ul class="job-details">
				<li>
					Successfully completed numerous personal and study projects, showcasing versatility in
					various programming languages and frameworks.
				</li>
				<li>
					Consistently acquired new skills and knowledge in cutting-edge technologies, showcasing
					adaptability and eagerness to learn.
				</li>
				<li>
					Collaborating effectively with cross-functional teams, leveraging strong communication and
					teamwork abilities.
				</li>
				<li>
					Contributing to open-source projects and sharing knowledge with the developer community
					through GitHub repositories and social media platforms.
				</li>
				<li>
					Continuously seeking opportunities to improve software performance, user experience, and
					maintainability by staying up-to-date with industry trends.
				</li>
				<li>
					Designing and developing scalable web applications using React, TypeScript, Apollo,
					GraphQL, SQL, and PostgreSQL at SoftZen.
				</li>
			</ul>
			<p class="contact-info">Contact: Vasil Pavlov, contact@softzen.co</p>
		</div>
		<div class="job-card">
			<div class="job-header">
				<h3>Full Stack Developer Intern</h3>
				<h4>OneBit Software</h4>
				<p class="date">09/2021 - 12/2021, Sofia City, Bulgaria</p>
			</div>
			<p class="job-description">
				OneBit Software is a dynamic software development company, providing innovative solutions
				and great culture of continuous learning and improvement.
			</p>
			<ul class="job-details">
				<li>
					Worked as a Developer on the Quantum DMS project, part of Team Mongo, utilizing .NET 5,
					ASP.NET, MongoDB, and React with TypeScript.
				</li>
				<li>
					Demonstrated commitment to agile software development practices, including sprint planning
					and delivering through a pull-request process.
				</li>
				<li>
					Developed a deep understanding of various programming languages and frameworks such as C#,
					Java, SQL Server, React Native, Python, Angular, BDD, TDD, .NET, Spring Boot, MongoDB,
					MVC, Blazor, and Azure DevOps.
				</li>
				<li>
					Embraced an Agile mindset, focusing on building the right product and adapting to change.
				</li>
				<li>Recognized the importance of continuous learning in software development.</li>
				<li>
					Identified the crucial role of designing software that meets user needs. Realized that the
					best code is minimal and easy to maintain.
				</li>
			</ul>
			<p class="contact-info">Contact: Radi Atanassov, radi@sharepoint.bg, +359878823339</p>
		</div>
	</section>

	<section>
		<h2 class="white-bold">Skills</h2>
		<div class="skills-section px-3 px-lg-4">
			<div class="row">
				<div class="col-md-6">
					<h2 class="h3 mb-3">Software Engineer</h2>
					<div class="mb-2">
						<span>TypeScript</span>
						<div class="progress my-1">
							<div
								class="progress-bar-engineer bg-primary"
								role="progressbar"
								style="width: 50%"
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>Tailwind CSS</span>
						<div class="progress my-1">
							<div
								class="progress-bar-engineer bg-primary"
								role="progressbar"
								style="width: 15%"
								aria-valuenow="15"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>Node.js</span>
						<div class="progress my-1">
							<div
								class="progress-bar-engineer bg-primary"
								role="progressbar"
								style="width: 75%"
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>React</span>
						<div class="progress my-1">
							<div
								class="progress-bar-engineer bg-primary"
								role="progressbar"
								style="width: 50%"
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>Svelte</span>
						<div class="progress my-1">
							<div
								class="progress-bar-engineer bg-primary"
								role="progressbar"
								style="width: 70%"
								aria-valuenow="70"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>Python</span>
						<div class="progress my-1">
							<div
								class="progress-bar-engineer bg-primary"
								role="progressbar"
								style="width: 25%"
								aria-valuenow="25"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>Angular</span>
						<div class="progress my-1">
							<div
								class="progress-bar-engineer bg-primary"
								role="progressbar"
								style="width: 40%"
								aria-valuenow="40"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>C#</span>
						<div class="progress my-1">
							<div
								class="progress-bar-engineer bg-primary"
								role="progressbar"
								style="width: 55%"
								aria-valuenow="55"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<h2 class="h3 mb-3">Data Science</h2>
					<div class="mb-2">
						<span>SQL</span>
						<div class="progress my-1">
							<div
								class="progress-bar-data-science bg-success"
								role="progressbar"
								style="width: 80%"
								aria-valuenow="80"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>Pandas</span>
						<div class="progress my-1">
							<div
								class="progress-bar-data-science bg-success"
								role="progressbar"
								style="width: 10%"
								aria-valuenow="10"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>NumPy</span>
						<div class="progress my-1">
							<div
								class="progress-bar-data-science bg-success"
								role="progressbar"
								style="width: 10%"
								aria-valuenow="10"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>scikit-learn</span>
						<div class="progress my-1">
							<div
								class="progress-bar-data-science bg-success"
								role="progressbar"
								style="width: 10%"
								aria-valuenow="10"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div class="mb-2">
						<span>TensorFlow</span>
						<div class="progress my-1">
							<div
								class="progress-bar-data-science bg-success"
								role="progressbar"
								style="width: 25%"
								aria-valuenow="25"
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
		<h2 class="white-bold">Interests</h2>
		<p class="white-bold">
			Following: Lex Fridman, Tony Robbins, Gary Vaynerchuk, Laszlo Bock, Andrew Huberman, Simon
			Sinek
		</p>

		<div class="interests-container">
			<div class="person">
				<img src={LexFridman} alt="Lex Fridman" />
				<blockquote>
					"Programming is the art of algorithm design and the craft of debugging errant code."
				</blockquote>
			</div>
			<div class="person">
				<img src={TonyRobinson} alt="Tony Robinson" />
				<blockquote>
					"In programming, as in life, it's all about turning obstacles into opportunities."
				</blockquote>
			</div>
			<div class="person">
				<img src={GaryVaynerchuk} alt="Gary Vaynerchuk" />
				<blockquote>
					"Success in programming comes from combining creativity, hustle, and a deep understanding
					of user needs."
				</blockquote>
			</div>
			<div class="person">
				<img src={LaszloBock} alt="Laszlo Bock" />
				<blockquote>
					"Programming is not just about code; it's about solving problems and making a positive
					impact on the world."
				</blockquote>
			</div>
			<div class="person">
				<img src={AndrewHuberman} alt="Andrew Huberman" />
				<blockquote>
					"The power of programming lies in its ability to transform ideas into reality and unlock
					infinite possibilities."
				</blockquote>
			</div>
			<div class="person">
				<img src={SimonSinek} alt="Simon Sinek" />
				<blockquote>
					"Programming is not just about writing code; it's about creating systems that inspire and
					empower people."
				</blockquote>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	h2.white-bold {
		color: white;
		font-weight: bold;
	}

	p.white-bold {
		color: white;
		font-weight: bold;
	}

	.progress-bar {
		transition: transform 0.5s;
	}

	.progress-bar:hover {
		transform: perspective(600px) rotateY(180deg);
	}

	@keyframes gradient-engineer {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes gradient-data-science {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.progress-bar-engineer {
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-size: 400% 400%;
		animation: gradient-engineer 15s ease infinite;
	}

	.progress-bar-data-science {
		background: linear-gradient(-45deg, #23d5ab, #23a6d5, #e73c7e, #ee7752);
		background-size: 400% 400%;
		animation: gradient-data-science 15s ease infinite;
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

	.work-experience {
		background: #f9f9f9;
		padding: 20px;
	}

	.job-card {
		background: #fff;
		border-radius: 10px;
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
		padding: 20px;
	}

	.job-header {
		border-bottom: 1px solid #eee;
		margin-bottom: 20px;
		padding-bottom: 10px;
	}

	.job-header h3 {
		color: #333;
		font-size: 1.5em;
		margin-bottom: 5px;
	}

	.job-header h4 {
		color: #777;
		font-size: 1.2em;
		margin-bottom: 5px;
	}

	.date {
		color: #999;
		font-size: 0.9em;
	}

	.job-description {
		color: #666;
		font-size: 1em;
		margin-bottom: 20px;
	}

	.job-details {
		color: #666;
		font-size: 1em;
		margin-bottom: 20px;
	}

	.contact-info {
		color: #333;
		font-size: 0.9em;
		font-weight: 600;
	}

	@keyframes speak {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.interests-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
		margin-top: 20px;
	}

	.person {
		text-align: center;
		background-color: #f5f5f5;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.person img {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 50%;
		margin-bottom: 10px;
	}

	.person blockquote {
		font-size: 1.2rem;
		font-style: italic;
		margin-bottom: 0;
	}

	.person {
		/* Other styles */
		transition: background-color 2s ease;
	}

	.person img {
		/* Other styles */
		transition: filter 2s ease;
	}

	.person blockquote {
		/* Other styles */
		transition: color 2s ease;
	}

	.person:hover {
		background-color: black;
	}

	.person:hover img {
		filter: brightness(0.5);
	}

	.person:hover blockquote {
		color: white;
	}

	@media (max-width: 767px) {
		.interests-container {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 600px) {
		img {
			width: 100%;
			height: auto;
		}
	}

	.progress {
		position: relative;
		overflow: visible; /* Allows the percentage to be visible outside the progress bar */
	}

	/* Display the percentage value on hover */
	.progress .progress-bar-engineer:hover::after,
	.progress .progress-bar-data-science:hover::after {
		content: attr(aria-valuenow) '%';
		position: absolute;
		right: -30px; /* Adjust this value to move the percentage value outside the progress bar */
		top: -10px; /* Adjust this value to move the percentage value above the progress bar */
		transform: translateY(-50%);
		color: #000; /* Change this to any color you want */
		font-size: 14px; /* Adjust this to change the font size */
		font-weight: bold; /* Makes the text bold */
		background-color: #fff; /* Adds a white background to the text */
		padding: 2px 5px; /* Adds some padding around the text */
		border-radius: 5px; /* Makes the background rounded */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adds a shadow for more 3D effect */
	}
	.bold-section {
		font-weight: bold;
	}

	/* Media queries for responsive design */
	@media (max-width: 576px) {
		.about-me div {
			flex-direction: column;
			align-items: unset;
		}
		.about-me div img {
			width: 100%;
			height: auto;
		}
	}

	@media (min-width: 577px) and (max-width: 768px) {
		.about-me div {
			flex-direction: row;
			align-items: center;
		}
		.about-me div img {
			width: 75%;
			height: auto;
		}
	}

	@media (min-width: 769px) and (max-width: 992px) {
		.about-me div {
			flex-direction: row;
			align-items: center;
		}
		.about-me div img {
			width: 85%;
			height: auto;
		}
	}

	@media (min-width: 993px) {
		.about-me div {
			flex-direction: row;
			align-items: center;
		}
		.about-me div img {
			width: 100%;
			height: auto;
		}
	}
</style>
