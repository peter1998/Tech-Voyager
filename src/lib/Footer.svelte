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
		background-color: #9be2d5;
		color: #fff !important;
		padding: 10px;
	}

	.social-links {
		display: flex;
		justify-content: center;
		width: 100%;
		flex-direction: column;
	}

	.social-links a {
		color: #000;
		font-size: 1.5em;
		transition: color 0.3s ease;
		margin: 10px 0;
		text-align: center;
	}

	@media (min-width: 360px) {
		.social-links a {
			font-size: 1.75em;
		}
	}

	@media (min-width: 480px) {
		.social-links a {
			font-size: 2em;
		}
	}

	@media (min-width: 600px) {
		.social-links {
			flex-direction: row;
			justify-content: space-around;
			width: 80%;
		}

		.social-links a {
			margin: 0 10px;
		}
	}

	@media (min-width: 768px) {
		.social-links {
			width: 70%;
		}

		.social-links a {
			font-size: 2.25em;
		}
	}

	@media (min-width: 1024px) {
		.social-links {
			width: 60%;
		}

		.social-links a {
			font-size: 2.5em;
		}
	}

	@media (min-width: 1200px) {
		.social-links {
			width: 50%;
		}

		.social-links a {
			font-size: 2.75em;
		}
	}

	@media (min-width: 1400px) {
		.social-links {
			width: 40%;
		}

		.social-links a {
			font-size: 3em;
		}
	}

	.social-links a:hover {
		color: #777;
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
