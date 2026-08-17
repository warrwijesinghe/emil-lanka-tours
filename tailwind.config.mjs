/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: { extend: { colors: { lotus: { DEFAULT: '#6D0DC5', soft: '#F4ECFB' }, leaf: { DEFAULT: '#184A25', soft: '#EEF6F0' }, sand: '#FAF8FC', ink: '#102318', gold: '#C79D45' }, boxShadow: { soft: '0 20px 45px rgba(16, 35, 24, 0.08)' }, fontFamily: { display: ['"Playfair Display"', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] } } }
};
