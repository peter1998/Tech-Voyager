<script lang="ts">
	import { goto } from '$app/navigation';
	import '@fortawesome/fontawesome-free/css/all.css';

	let isSidebarOpen = false; // Set the initial state to closed

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	function navigateTo(route: string) {
		toggleSidebar(); // Close the sidebar when a link is clicked
		goto(route);
	}

	$: sidebarIcon = isSidebarOpen ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
	$: sidebarIconStyle = isSidebarOpen ? 'expanded' : 'collapsed';
</script>

<div class="sidebar-container" class:collapsed={!isSidebarOpen}>
	<div class="sidebar-header">
		<button class="toggle-button" on:click={toggleSidebar}>
			<i class={sidebarIcon} />
		</button>
	</div>

	<nav class="sidebar">
		<ul>
			<li>
				<a href="/hobby" on:click|preventDefault={() => navigateTo('/hobby')}>
					<i class="fas fa-hiking" />
					<span>Explore the Wild Side of Hiking</span>
				</a>
			</li>

			<!-- Add more links here -->
		</ul>
	</nav>
</div>

<style>
	/* Add some styles to make the sidebar visible */
	.sidebar-container {
		position: fixed;
		left: 0;
		top: 50%; /* Adjust this to start from the middle of the screen */
		transform: translateY(-50%); /* This will center the sidebar vertically */
		width: 220px; /* Increase the width for more space */
		height: auto; /* Let the height be determined by its content */
		background-color: #f5f5f5;
		padding: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		transition: width 0.3s ease, background-color 0.3s ease;
		z-index: 999;
		overflow: hidden;
	}

	.sidebar-container:hover {
		background-color: #000;
	}

	.sidebar {
		list-style: none;
		padding: 0;
		margin-top: 20px; /* Add some top margin for spacing */
	}

	li {
		margin-bottom: 10px;
	}

	a {
		display: flex;
		align-items: center;
		color: #333;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	a:hover {
		color: #fff;
	}

	.sidebar-header {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 20px;
	}

	.toggle-button {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 20px;
		color: #333;
		transition: transform 0.3s ease, color 0.3s ease;
	}

	.toggle-button:hover {
		color: #fff;
	}

	.toggle-button:focus {
		outline: none;
	}

	.collapsed {
		width: 80px;
	}

	.collapsed .toggle-button {
		transform: rotate(180deg);
	}

	/* Styling for the sidebar icon */
	.expanded .fa-chevron-left {
		transform: rotate(180deg);
	}

	.collapsed .fa-chevron-right {
		transform: rotate(180deg);
	}

	.fa-hiking {
		margin-right: 10px; /* Add right margin for spacing */
	}
</style>
