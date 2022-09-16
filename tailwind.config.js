/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-1': '#518581',
				'primary-2': '#6E9996',
				'primary-3': '#8BAEAB',
				'primary-4': '#A8C2C0',
				'primary-5': '#C5D6D5',
				'primary-6': '#DCE7E6',
				'secondary-1': '#FFB23F',
				'secondary-2': '#FFBF5F',
				'secondary-3': '#FFCC7F',
				'secondary-4': '#FFD89F',
				'secondary-5': '#FFE5BF',
				'secondary-5': '#FFF0D9',
				'title-1': '#151411',
				'title-2': '#3C3B39',
				'title-3': '#636260',
				'title-4': '#8A8988',
				'title-5': '#B1B1B0',
				'title-6': '#D0D0CF',
				'paragraph-1': '#AFADB5',
				'paragraph-2': '#BCBBC1',
				'paragraph-3': '#CAC8CE',
				'paragraph-4': '#D7D6DA',
				'paragraph-5': '#E4E4E6',
				'paragraph-6': '#EFEFF0',
				'placholder-1': '#F9F9F9',
				'placholder-2': '#FAFAFA',
				'placholder-3': '#FBFBFB',
				'placholder-4': '#FCFCFC',
				'placholder-5': '#FDFDFD',
				'placholder-6': '#FEFEFE',
				'light-white': '#F3F3F3',
			},
		},
		fontFamily: {
			// sans: ['EudoxusSans-Medium'],
			// body: ['EudoxusSans-Reguler'],
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: {
					fontSize: '64px',
				},
				h2: {
					fontSize: '44px',
				},
				h3: {
					fontSize: '24px',
				},
				h4: {
					fontSize: '20px',
				},
				h5: {
					fontSize: '16px',
				},

				paragraph: {
					fontFamily: 'EudoxusSans-Medium',
					color: theme('title-1'),
					opacity: '80%',
					lineHeight: '130%',
				},
				par1: {
					fontSize: '18px',
				},
				par2: {
					fontSize: '16px',
				},
				par3: {
					fontSize: '14px',
				},
			});
		}),
	],
};
