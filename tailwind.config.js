/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				underline: "url('../../public/img/underline.png')",
				underline2: "url('../../public/img/underline2.png')",
				balloon: "url('../../public/img/balloon.png')",
				decor: "url('../../public/img/decor.png')",
				decor2: "url('../../public/img/decor2.png')",
				sunflower: "url('../../public/img/sunflower.png')",
			},
			fontFamily: {
				gelica: ["Gelica", "sans-serif"],
				"gelica-italic": ["Gelica-italic", "sans-serif"],
			},
			colors: {
				beige: "#f8f5f3",
				"dark-green": "#013d2a",
				"dark-brown": "#29231d",
				"btn-brown": "#19110e",
				"btn-yellow": "#fed540",
			},
		},
	},
	plugins: [require("daisyui")],
};
