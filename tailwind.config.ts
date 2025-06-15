
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#FFA94D",
					foreground: "#5C4635"
				},
				secondary: {
					DEFAULT: "#FFE5B4",
					foreground: "#5C4635"
				},
				accent: {
					DEFAULT: "#FC6E26",
					foreground: "#fffaf5"
				},
				neutral: {
					DEFAULT: "#fffaf5",
					foreground: "#5C4635"
				},
				chocolate: "#5C4635",
			},
			fontFamily: {
				playfair: ["'Playfair Display'", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			borderRadius: {
				lg: '1rem',
				md: '0.5rem',
				sm: '0.25rem'
			},
			boxShadow: {
				food: "0 2px 24px 0 rgba(252, 110, 38, 0.10), 0 1.5px 3px rgba(60, 40, 10, 0.03)"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
