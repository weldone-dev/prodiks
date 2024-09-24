import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';

const minHInheritPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.min-h-inherit': {
      minHeight: 'inherit',
    },
  });
});

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        '2xl': '1190px',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [
    minHInheritPlugin,
  ],
};

export default config;