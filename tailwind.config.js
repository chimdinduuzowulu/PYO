/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        backgroundImage: {
        'pyo-1': "url('/images/1-10 3.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }},
  },
  plugins: [],
}
