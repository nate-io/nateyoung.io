/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'netflix-red': '#E50914',
				'dark-bg': '#141414',
				'dark-gray': '#222222',
				'medium-gray': '#6D6D6E',
				'light-gray': '#B3B3B3',
				'highlight-blue': '#0071EB',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
				body: ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
