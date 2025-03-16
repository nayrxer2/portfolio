import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');
const tailwindForms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');

const assignStyles = (
  fontSize: string,
  fontWeight: string,
  lineHEight: string,
  letterSpacing: string | number
) => ({
  fontSize,
  fontWeight,
  lineHEight,
  letterSpacing
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlowCondensed': ['Barlow Condensed']
      },
      colors: {
        ... colors,
        primary: {
          100: '#560591',
          200: '#560591',
          300: '#4C0481',
          400: '#430471',
          500: '#390361',
          600: '#300351',
          700: '#260240',
          800: '#1D0230',
          900: '#130120',
        },
      },
    },
  },
  plugins: [
    tailwindForms,
    plugin(({ addUtilities }: any) => {
      addUtilities({
        '.display-2xl-reg': assignStyles('72px', '400', '90px', '-2%'),
      })
    }),
  ]
};
export default config;
