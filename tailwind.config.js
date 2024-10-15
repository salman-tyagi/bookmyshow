import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideBottom: {
          from: { opacity: 0, transform: 'translateY(-7rem)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        slideLeft: {
          from: { opacity: 0.2, transform: 'translateX(24rem)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        }
      },

      animation: {
        'slide-bottom': 'slideBottom 0.3s ease-out',
        'slide-left': 'slideLeft 0.3s ease-in-out'
      }
    }
  },
  plugins: []
};
