/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'commitment-baner': "url('/src/assets/images/bgbaner.png')",
        'bg-images': "url('/src/assets/images/bg1004.png')",
        'bg-footer': "url('/src/assets/images/background.png')",
      }
    },
  },
  plugins: [],
}