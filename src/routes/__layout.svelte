<script>
	import Sidebar from '../routes/sidebar/Sidebar.svelte';
</script>

<Sidebar />

<main>
	<slot />
</main>

<style>
	/* Add some styles to make the main content visible */
	main {
		margin-left: 220px;
		padding: 20px;
	}
</style>
