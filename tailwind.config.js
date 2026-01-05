/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#246B2F',
        'green-bright': '#38B14A',
        'black': '#000000',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'sans': ['Oswald', 'sans-serif'], // Make Oswald the default font
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}

