/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"macbook-overlay": "url('/public/imgs/mb16pro.png')",
			},
		},
		colors: {
			"primary-color": "#FBFBFB",
			"custom-accent": "#ff4921",
		},
	},
	plugins: [],
};
