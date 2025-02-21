/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'fill-blue-500',
    'fill-indigo-500',
    'fill-violet-500',
    'fill-fuchsia-500',
    'fill-rose-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
