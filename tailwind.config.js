/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0b193e',
        appPrimary: '#cfa400',
        appSecondary: '#01c2cf',
      }
    },
  },
  plugins: [],
}

