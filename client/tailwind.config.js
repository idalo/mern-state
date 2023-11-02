/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'bg-bilbao': {
        '50': '#f0fdf2',
        '100': '#dcfce1',
        '200': '#bbf7c5',
        '300': '#87ee9a',
        '400': '#4bdd66',
        '500': '#23c442',
        '600': '#17a232',
        '700': '#157a29',
        '800': '#176426',
        '900': '#155222',
        '950': '#052e0f',
    },
    
    },
  },
  plugins: [],
}