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
    fontSize: {
      'h2-bold': [
        '2.25rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '800'
        }
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '400',
        }
      ],
      '3xl': [
        '4.5rem',
        {
          lineHeight: '5rem',
          fontWeight: '800',
        }
      ],
    },
    extend: {
      boxShadow: {
        pink: "0 3px 5px #FD31FC",
      },
      colors:{
        blue: "#0087BD",
        lavender: "#8D07FE",
        pink: "#FD31FC",
        bg: "#0F0019",
        primary: "#00EEFA",
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
