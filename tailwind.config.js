// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // <<< Nustatome 'Montserrat' kaip pagrindinį 'sans' šriftą >>>
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        // <<< Nustatome 'Lora' kaip 'serif' šriftą >>>
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}