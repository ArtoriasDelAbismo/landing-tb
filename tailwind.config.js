/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "orangeTB": "var(--orangeTB)",
          "yellowBall": "var(--yellowBall)",
          "textInputField": "var(--text-input-field)",
        }
      },
    },
    plugins: [],
  }