/** @type {import('tailwindcss').Config} */
export default {
  content: ['**/*.{ts,tsx,html}'],
  theme: {
    fontSize: {
      'common-bold': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: 700
        }
      ],
      'h2-bold': [
        '2.25rem',
        {
          lineHeight: '2.5rem',
          fontWeight: '700'
        }
      ],
      h2: [
        '2rem',
        {
          lineHeight: '3rem',
          fontWeight: '700'
        }
      ],
      'h4-bold': [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '700'
        }
      ],
      h4: [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '400'
        }
      ],
      lg: [
        '14px',
        {
          lineHeight: '18px',
          fontWeight: '400'
        }
      ],
      xl: [
        '18px',
        {
          lineHeight: '24px',
          fontWeight: '400'
        }
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
          fontWeight: '400'
        }
      ],
      '3xl': [
        '4.5rem',
        {
          lineHeight: '5rem',
          fontWeight: '800'
        }
      ]
    },
    extend: {
      boxShadow: {
        pink: '0 3px 5px #FD31FC',
        blue: '0 6px 10px #00EEFA',
        lavender: '0 10px 10px #8D07FE',
        blueSmall: '0 2px 4px #0087BD'
      },
      colors: {
        blue: '#0087BD',
        lavender: '#8D07FE',
        pink: '#FD31FC',
        bg: '#0F0019',
        primary: '#00EEFA',
        gray: '#979797'
      }
    }
  },
  plugins: [
    function ({addVariant}) {
      addVariant('children', '&>*');
    }
  ]
};
