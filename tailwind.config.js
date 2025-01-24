/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
    },
    animation: {
      beat: "beat 1s",
    },
    keyframes: {
      beat: {
        "0%": { transform: "scale(1)" },
        "25%": {transform: "scale(1.3)"},
        "50%": {transform: "scale(1)"},
        "75%": {transform: "scale(1.3)"},
        "100%": { transform: "scale(1)" },
      },
    }
  },
  },
  plugins: [],
}

