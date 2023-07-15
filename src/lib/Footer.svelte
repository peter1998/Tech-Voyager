<script>
	import {
		faYoutube,
		faFacebook,
		faLinkedin,
		faGithub,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<footer class="footer">
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
		<a class="icon instagram" href="https://www.instagram.com/forestrespond/" target="_blank">
			<FontAwesomeIcon icon={faInstagram} />
		</a>
	</div>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #9be2d5; /* Set the background color */
		color: #fff !important;
		padding: 10px;
	}

	.social-links {
		display: flex;
		justify-content: space-around;
		width: 60%; /* Adjust this value to increase or decrease spacing between icons */
	}

	.social-links a {
		color: #000; /* Change this to match your website's color scheme */
		font-size: 2em; /* Adjust this value to make the icons larger */
		transition: color 0.3s ease;
	}

	.social-links a:hover {
		color: #777; /* Change this to match your website's color scheme */
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
		color: #000;
	}

	.social-links .icon.instagram {
		color: #e1306c;
	}
</style>
