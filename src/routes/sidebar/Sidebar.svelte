<script lang="ts">
	import { goto } from '$app/navigation';
	import '@fortawesome/fontawesome-free/css/all.css';

	let isSidebarOpen = true; // Set the initial state to open
	let isSidebarHidden = false; // Set the initial state to not hidden

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	function hideSidebar() {
		isSidebarHidden = true;
	}

	function showSidebar() {
		isSidebarHidden = false;
	}

	function navigateTo(route: string) {
		toggleSidebar(); // Close the sidebar when a link is clicked
		goto(route);
	}

	$: sidebarIcon = isSidebarOpen ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
</script>

<div class="sidebar-container" class:collapsed={!isSidebarOpen} class:hidden={isSidebarHidden}>
	<div class="sidebar-header">
		<button class="toggle-button" on:click={toggleSidebar}>
			<i class={sidebarIcon} />
		</button>
		<button class="hide-button" on:click={hideSidebar}>
			<i class="fas fa-times" />
		</button>
	</div>

	<nav class="sidebar">
		<ul>
			<li>
				<a href="/hobby" on:click|preventDefault={() => navigateTo('/hobby')}>
					<i class="fas fa-hiking icon" />
					<span class="link-text">Explore the Wild Side of Hiking</span>
				</a>
			</li>

			<li>
				<a href="/trailcameras" on:click|preventDefault={() => navigateTo('/trail-cameras')}>
					<i class="fas fa-camera icon" />
					<span class="link-text">Trail Cameras Monitoring Wildlife</span>
				</a>
			</li>

			<li>
				<a href="/feedback" on:click|preventDefault={() => navigateTo('/feedback')}>
					<i class="fas fa-comments icon" />
					<span class="link-text">Feedback</span>
				</a>
			</li>

			<!-- Add more links here -->
		</ul>
	</nav>
</div>

<button class="show-button" on:click={showSidebar} class:hidden={!isSidebarHidden}>
	<i class="fas fa-bars" />
</button>

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
		list-style-type: none;
		margin-bottom: 10px;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: start; /* Align the content to the start */
		color: #333;
		text-decoration: none;
		transition: color 0.3s ease;
		padding: 0 10px; /* Add padding to the links */
	}

	.icon {
		margin-right: 10px; /* Add right margin for spacing */
		transition: margin 0.3s ease; /* Add a transition to the margin */
	}

	.collapsed .icon {
		margin-right: 0; /* Remove the right margin when the sidebar is collapsed */
	}

	.collapsed a {
		justify-content: center; /* Center the content of the links when the sidebar is collapsed */
	}

	.sidebar-container:hover a,
	.sidebar-container:hover .toggle-button,
	.sidebar-container:hover .show-button {
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

	.collapsed .fa-chevron-right {
		transform: rotate(180deg);
	}

	.hidden {
		display: none;
	}

	.hide-button {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 20px;
		color: #333;
		transition: color 0.3s ease;
	}

	.hide-button:hover {
		color: #ff0000;
	}

	.show-button {
		position: fixed;
		left: 0;
		top: 28%;
		background-color: #f5f5f5;
		border: none;
		color: #333;
		padding: 10px;
		cursor: pointer;
		z-index: 1000;
	}

	.show-button:hover {
		color: green;
	}

	.link-text {
		transition: opacity 0.3s ease; /* Add a transition to the opacity */
	}

	.collapsed .link-text {
		opacity: 0; /* Hide the text when the sidebar is collapsed */
		visibility: hidden; /* This will prevent the text from taking up space */
	}

	.fa-hiking {
		margin-right: 10px; /* Add right margin for spacing */
		position: relative;
		left: -5px; /* Adjust this value as needed */
	}
</style>
