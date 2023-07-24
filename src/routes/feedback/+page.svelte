<script>
	import { createClient } from '@supabase/supabase-js';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Sidebar from '../sidebar/Sidebar.svelte';

	const supabase = createClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_ANON_KEY
	);

	let name = '';
	let message = '';
	let anonymous = false;
	let successMessage = '';

	async function handleSubmit() {
		if ((name || anonymous) && message) {
			const { error } = await supabase
				.from('feedback')
				.insert([{ name: anonymous ? 'Anonymous' : name, message: message }]);

			if (error) {
				alert('Error submitting feedback: ' + error.message);
			} else {
				name = '';
				message = '';
				successMessage = 'Feedback submitted successfully!';
				setTimeout(() => {
					successMessage = '';
				}, 5000);
			}
		}
	}
</script>

<div class="layout">
	<Header />
	<Sidebar />

	<main>
		<form on:submit|preventDefault={handleSubmit} class="feedback-form">
			<label class="checkbox-container">
				<input type="checkbox" bind:checked={anonymous} />
				<span class="checkmark" />
				Submit as Anonymous
			</label>
			<label>
				Name:
				<input type="text" bind:value={name} placeholder="Anonymous" disabled={anonymous} />
			</label>
			<label>
				Feedback:
				<textarea bind:value={message} required />
			</label>
			<button type="submit">Submit Feedback</button>
		</form>
		{#if successMessage}
			<div class="success-message">{successMessage}</div>
		{/if}
	</main>

	<Footer />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	.feedback-form {
		display: flex;
		flex-direction: column;
		gap: 1em;
		max-width: 600px;
		margin: 0 auto;
		background: linear-gradient(to right, #f5f5f5, #ddd);
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	}

	.feedback-form label {
		display: flex;
		flex-direction: column;
		font-size: 1.2em;
	}

	.feedback-form input,
	.feedback-form textarea {
		padding: 0.5em;
		font-size: 1em;
		border-radius: 4px;
		border: 1px solid #ccc;
		transition: border 0.3s ease;
	}

	.feedback-form input:hover,
	.feedback-form textarea:hover {
		border: 1px solid #0077cc;
	}

	.feedback-form button {
		padding: 0.5em 1em;
		font-size: 1.2em;
		color: white;
		background-color: #0077cc;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.feedback-form button:hover {
		background-color: #005999;
	}
	.checkbox-container {
		display: block;
		position: relative;
		padding-left: 45px; /* Increase left padding */
		margin-bottom: 12px;
		cursor: pointer;
		font-size: 22px;
		user-select: none;
	}

	.checkbox-container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 35px; /* Increase height */
		width: 35px; /* Increase width */
		background-color: #cdc451;
		border-radius: 4px;
	}

	.checkbox-container:hover input ~ .checkmark {
		background-color: #333;
	}

	.checkbox-container input:checked ~ .checkmark {
		background-color: #0077cc;
	}

	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	.checkbox-container input:checked ~ .checkmark:after {
		display: block;
	}

	.checkbox-container .checkmark:after {
		left: 12px; /* Adjust position */
		top: 8px; /* Adjust position */
		width: 7px; /* Increase width */
		height: 14px; /* Increase height */
		border: solid white;
		border-width: 0 4px 4px 0; /* Increase border width */
		transform: rotate(45deg);
	}

	.success-message {
		margin-top: 20px;
		padding: 10px;
		color: white;
		background-color: green;
		font-weight: bold;
		border-radius: 5px;
		box-shadow: 0px 10px 20px rgba(0, 128, 0, 0.2);
		animation: fadein 0.5s, fadeout 2.5s 2.5s;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeout {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
