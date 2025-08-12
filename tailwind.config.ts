import type { Config } from 'tailwindcss';

/
 * Custom Tailwind configuration for luxury FashionTV cosmetics.
 * This configuration is tailored to create an elegant and high-end design
 * that reflects the luxury fashion industry, using a pink and white color scheme.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FBBBC4', // Light pink for backgrounds and accents
          DEFAULT: '#F472B6', // Primary pink for buttons and highlights
          dark: '#D5006D', // Darker pink for contrast
        },
        white: '#FFFFFF', // Pure white for text and backgrounds
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['hover', 'focus'],
      scale: ['hover', 'focus'],
    },
  },
  plugins: [],
};

export default config;