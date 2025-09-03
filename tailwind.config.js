/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'ui-sans-serif', 'system-ui'],
        'open-sans': ['Open Sans', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
