module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xxsm: "320px",
				xsm: "350px",
			},

			colors: {
				eccblue: "#0B63C5",
				eccgreen: "#67B467",
				clearblue: "#F1F7FE",
				darkblue: "#031830",
				white: "#fff",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
