/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'arial': ['arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}

