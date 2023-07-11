<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import * as brain from 'brain.js';

	let container: HTMLDivElement | null = null;
	let renderer: THREE.WebGLRenderer | null = null;
	let scene = new THREE.Scene();
	let camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
	let animationFrameId: number | null = null;

	onMount(() => {
		if (container && typeof window !== 'undefined') {
			// Initialize the renderer here
			renderer = new THREE.WebGLRenderer();
			renderer.setSize(container.clientWidth, container.clientHeight);
			container.appendChild(renderer.domElement);

			// Create a neural network
			const net = new brain.NeuralNetwork();
			// Train the network with more input-output pairs
			net.train([
				{ input: [0], output: [1] },
				{ input: [1], output: [0] },
				{ input: [0.5], output: [0.5] },
				{ input: [0.8], output: [0.2] },
				{ input: [0.2], output: [0.8] }
			]);

			// Create a 3D representation of the neural network
			const geometry = new THREE.SphereGeometry(0.5, 32, 32);
			const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

			const nodes = net.toJSON().layers.map((layer, index) => {
				const node = new THREE.Mesh(geometry, material);
				// Set the position of the node
				node.position.set(index * 2, 0, 0); // Adjust as needed
				scene.add(node);
				return node;
			});

			// Add connections between nodes
			const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
			for (let i = 0; i < nodes.length - 1; i++) {
				const points = [nodes[i].position, nodes[i + 1].position];
				const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
				const line = new THREE.Line(lineGeometry, lineMaterial);
				scene.add(line);
			}

			// Add lights
			const light = new THREE.DirectionalLight(0xffffff, 1);
			light.position.set(1, 1, 1).normalize();
			scene.add(light);

			// Set camera position
			camera.position.z = 5;

			// Add an animation loop
			const animate = function () {
				animationFrameId = requestAnimationFrame(animate);
				if (renderer !== null) {
					renderer.render(scene, camera);
				}
			};
			animate();
		}
	});

	onDestroy(() => {
		// Clean up when the component is destroyed
		if (animationFrameId !== null) {
			cancelAnimationFrame(animationFrameId);
		}
		if (renderer !== null) {
			renderer.dispose();
		}
	});
</script>

<div bind:this={container} style="width: 100%; height: 100vh;" />
