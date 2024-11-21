/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': { 'max': '1024px' },
        'max-md': { 'max': '768px' }, // Custom max-width breakpoint
        'max-mmd': { 'max': '640px' }, // Custom max-width breakpoint
        'max-sm': { 'max': '508px' }, // Custom max-width breakpoint
        'max-mxsm': { 'max': '485px' }, // Custom max-width breakpoint
        'max-xsm': { 'max': '440px' }, // Custom max-width breakpoint
        'max-xxsm': { 'max': '360px' }, // Custom max-width breakpoint
      },
    },
  },
  plugins: [],
}
