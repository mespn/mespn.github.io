/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  safelist:[
    "border-rose-500",
    "border-2",
    "bg-green-400",
    "hover:bg-green-600"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}

