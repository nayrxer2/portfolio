import { mdiGradientVertical } from "@mdi/js";
import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');
const tailwindForms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');

const assignStyle = (
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
      animation: {
        'gradient-animation': '3s ease infinite',
        'spin-fast': 'spin linear 1s infinite'
      },
      keyframes: {
        gradient: {
          '0%': {},
          '100%': {  backgroundPosition: '0% 50%', },
          '50%': { backgroundPostion: '100% 50%', },
        }
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"'],
        'press-start': ['"Press Start 2P"', 'cursive'],
        spacemono: ['"Space Mono"', 'serif']
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
        '.display-2xl-reg': assignStyle('72px', '400', '90px', '-2%'),
        '.display-2xl-med': assignStyle('72px', '500', '90px', '-2%'),
        '.display-2xl-sem': assignStyle('72px', '600', '90px', '-2%'),
        '.display-2xl-bold':assignStyle('72px', '700', '90px', '-2%'),

        '.display-xl-reg': assignStyle('60px', '400', '72px', '-2%'),
        '.display-xl-med': assignStyle('60px', '500', '72px', '-2%'),
        '.display-xl-sem': assignStyle('60px', '600', '72px', '-2%'),
        '.display-xl-bold':assignStyle('60px', '700', '60px', '-2%'),

        '.display-lg-reg': assignStyle('48px', '400', '60px', '0'),
        '.display-lg-med': assignStyle('48px', '500', '60px', '0'),
        '.display-lg-sem': assignStyle('48px', '600', '60px', '0'),
        '.display-lg-bold':assignStyle('48px', '700', '60px', '0'),

        '.display-md-reg': assignStyle('36px', '400', '44px', '0'),
        '.display-md-med': assignStyle('36px', '500', '44px', '0'),
        '.display-md-sem': assignStyle('36px', '600', '44px', '0'), 
        '.display-md-bold':assignStyle('36px', '700', '44px', '0'),

        '.display-sm-reg': assignStyle('30px', '400', '38px', '0'),
        '.display-sm-med': assignStyle('30px', '500', '38px', '0'),
        '.display-sm-sem': assignStyle('30px', '600', '38px', '0'),
        '.display-sm-bold':assignStyle('30px', '700', '38px', '0'), 

        '.display-xs-reg': assignStyle('24px', '400', '32px', '0'),
        '.display-xs-med': assignStyle('24px', '500', '32px', '0'),
        '.display-xs-sem': assignStyle('24px', '600', '32px', '0'),
        '.display-xs-bold':assignStyle('24px', '700', '32px', '0'), 

        '.text-xl-reg': assignStyle('20px', '400', '30px', '0'),
        '.text-xl-med': assignStyle('20px', '500', '30px', '0'),
        '.text-xl-sem': assignStyle('20px', '600', '30px', '0'),
        '.text-xl-bold':assignStyle('20px', '700', '30px', '0'),

        '.text-lg-reg': assignStyle('18px', '400', '28px', '0'),
        '.text-lg-med': assignStyle('18px', '500', '28px', '0'),
        '.text-lg-sem': assignStyle('18px', '600', '28px', '0'),
        '.text-lg-bold':assignStyle('18px', '700', '28px', '0'),

        '.text-md-reg': assignStyle('16px', '400', '24px', '0'),
        '.text-md-med': assignStyle('16px', '500', '24px', '0'),
        '.text-md-sem': assignStyle('16px', '600', '24px', '0'),
        '.text-md-bold':assignStyle('16px', '700', '24px', '0'),

        '.text-sm-reg': assignStyle('14px', '400', '20px', '0'),
        '.text-sm-med': assignStyle('14px', '500', '20px', '0'),
        '.text-sm-sem': assignStyle('14px', '600', '20px', '0'),
        '.text-sm-bold':assignStyle('14px', '700', '20px', '0'),

        '.text-xs-reg': assignStyle('12px', '400', '18px', '0'),
        '.text-xs-med': assignStyle('12px', '500', '18px', '0'),
        '.text-xs-sem': assignStyle('12px', '600', '18px', '0'),
        '.text-xs-bold':assignStyle('12px', '700', '18px', '0'),
      })
    }),
  ]
};
export default config;
