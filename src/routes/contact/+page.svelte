<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '../sidebar/Sidebar.svelte';
	import { faYoutube, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<Sidebar />

<Header />
<main>
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
					Peter Matov<br />Druzhba 1, block 168<br />Sofia, Bulgaria
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
		<form action="https://formspree.io/f/xeqbqbdg" method="POST" id="contact-form">
			<label for="name">Your Name:</label>
			<input type="text" name="name" id="name" placeholder="Your Name..." />

			<label for="email">Your Email:</label>
			<input type="email" name="email" id="email" placeholder="Your Email..." />

			<label for="message">Your Message:</label>
			<textarea name="message" id="message" cols="45" rows="5" placeholder="Your Message..." />

			<button type="submit" name="button" id="button">Say hello!</button>
		</form>
	</section>
</main>

<Footer />

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
		background-color: #f1f1f1;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	}

	.contact-details {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.contact-item {
		background-color: #fff;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	}

	#contact-form {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}

	#contact-form label {
		font-weight: bold;
		margin-top: 1em;
	}

	#contact-form input,
	#contact-form textarea {
		border: none;
		border-radius: 5px;
		padding: 10px;
		font-size: 1em;
		width: 100%;
		box-sizing: border-box;
		transition: box-shadow 0.3s ease;
	}

	#contact-form input:focus,
	#contact-form textarea:focus {
		box-shadow: 0 0 5px rgba(81, 203, 238, 1);
		outline: none;
	}

	#contact-form button {
		margin-top: 1em;
		background-color: #333;
		color: #fff;
		border: none;
		border-radius: 5px;
		padding: 10px 20px;
		font-size: 1em;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	#contact-form button:hover {
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
		transition: background-color 0.3s ease;
	}

	.social-links a:hover {
		background-color: #f1f1f1;
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
