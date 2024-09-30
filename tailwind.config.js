/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#222222',
        'secondary': '#333333',
        'tertiary': '#444444',
        'text-btn': '#FAB7BB',
        'text-btn-hover': '#FAB7BB',
        'dark': '#111111',
        'light': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

