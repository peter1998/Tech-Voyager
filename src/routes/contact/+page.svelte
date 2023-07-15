<script>
	import Sidebar from '../sidebar/Sidebar.svelte';
	import { faYoutube, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<Sidebar />

<main>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/projects">Projects</a>
		<a href="/cv">CV</a>
	</nav>

	<section id="contact">
		<h2>Contact</h2>
		<p>Let's Keep In Touch</p>
		<p>
			I'm always open to discussing product design, technology, and creative ideas. If you have a
			project in mind, let's connect!
		</p>

		<div class="contact-details">
			<div class="contact-item">
				<h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</h3>
				<p>
					Peter Matov<br />PO Box 16122 Collins Street West,<br />Victoria 8007, United States.
				</p>
			</div>
			<div class="contact-item">
				<h3><FontAwesomeIcon icon={faPhone} /> Phone</h3>
				<p>+359-0888187905</p>
			</div>
			<div class="contact-item">
				<h3><FontAwesomeIcon icon={faEnvelope} /> Email</h3>
				<p><a href="mailto:no-reply@domain.com">pmatov@gmail.com</a></p>
			</div>
		</div>

		<h3>I'm also on Social Networks</h3>
		<p>Follow me on social media to stay updated on my latest projects and insights!</p>
		<div class="social-links">
			<a
				class="icon youtube"
				href="https://www.youtube.com/channel/UCV3HPMkEF6SsOOJnji2i7kA"
				target="_blank"
			>
				<FontAwesomeIcon icon={faYoutube} />
			</a>
			<a class="icon facebook" href="https://www.facebook.com/pmatov" target="_blank">
				<FontAwesomeIcon icon={faFacebook} />
			</a>
			<a
				class="icon linkedin"
				href="https://www.linkedin.com/in/peter-matov-5b7166227/"
				target="_blank"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a class="icon github" href="https://github.com/peter1998" target="_blank">
				<FontAwesomeIcon icon={faGithub} />
			</a>
		</div>

		<h3>Drop Me a Line</h3>
		<p>Have a question or want to work together? Just fill out the form below!</p>
		<form id="contact-form">
			<input name="name" type="text" id="name" placeholder="Your Name..." />
			<input name="email" type="text" id="email" placeholder="Your Email..." />
			<textarea name="message" id="message" cols="45" rows="5" placeholder="Your Message..." />
			<input type="submit" name="button" id="button" value="say hello!" />
		</form>
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
		padding: 10px;
		transition: background-color 0.3s ease;
	}

	nav a:hover {
		background-color: #7db9a5;
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

	#contact {
		margin-left: auto;
		margin-right: auto;
		width: 50%;
		padding: 20px;
	}

	.contact-details {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.contact-item {
		background-color: #f1f1f1;
		padding: 10px;
		border-radius: 5px;
	}

	#contact-form input,
	#contact-form textarea {
		width: 100%;
		margin-bottom: 10px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
	}

	#contact-form input[type='submit'] {
		background-color: #333;
		color: #fff;
		cursor: pointer;
	}

	#contact-form input[type='submit']:hover {
		background-color: #444;
	}

	.social-links {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	.social-links a {
		flex-grow: 1;
		text-align: center;
		color: #fff;
		font-size: 2em; /* Adjust this value to make the icons larger */
	}

	.social-links .icon.youtube {
		color: #ff0000;
	}

	.social-links .icon.facebook {
		color: #3b5998;
	}

	.social-links .icon.linkedin {
		color: #0e76a8;
	}

	.social-links .icon.github {
		color: #fff;
	}
</style>
