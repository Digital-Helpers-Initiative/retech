/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				h1: ['"Bungee"', 'sans-serif'],
				h2: ['"Crimson Text"', 'sans-serif'],
				h4: ['"Space Mono"', 'mono'],
				navlink: ['"Poppins"', 'sans-serif'],
				body: ['"Poppins"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
