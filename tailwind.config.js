/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        custom:"620px",
      },
      spacing: {
        "40-c":"40rem",
      },
    },
  },
  plugins: [],
}
