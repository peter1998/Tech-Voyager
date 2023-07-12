<script>
	// You can add JavaScript code here
	import Sidebar from '../sidebar/Sidebar.svelte';
</script>

<Sidebar />
<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/projects">Projects</a>
	<a href="/cv">CV</a>
</nav>

<h1>Contact Me</h1>
<p>You can reach me at:</p>

<!-- We'll add your contact information here -->
<p>Email: [Your Email]</p>
<p>LinkedIn: [Your LinkedIn]</p>
<p>GitHub: [Your GitHub]</p>

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
</style>
