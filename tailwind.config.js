import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          from: { opacity: 0.2, transform: 'translateX(24rem)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        }
      },
      animation: {
        'slide-left': 'slideLeft 0.3s ease-in-out'
      }
    }
  },
  plugins: []
};
