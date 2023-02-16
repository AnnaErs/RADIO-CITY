/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      'desktop': '1024px',
    },
    extend: {
      colors:{
      }
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('children', '&>*')
    }
  ],
  safelist: [
    {
      pattern: /-m-(1|2|3|4|5|6)/,
      variants: ['tablet', 'desktop']
    },
    {
      pattern: /p-(1|2|3|4|5|6)/,
      variants: ['children']
    },
  ]
}
