import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['public']
		}
	},
	assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.jpeg'],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
