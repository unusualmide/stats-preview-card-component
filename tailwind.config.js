/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html'],
  theme: {

    fonSize: {
      xxs: ['0.7rem', '1rem'],
    xs: ['0.75rem', '1rem'],
      sm: ['0.84rem', '1.20rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      xxl: ['1.5rem', '2rem'],
      xxxl: ['1.875rem', '2.25rem'],
      xxxxl: ['2.25rem', '2.5rem'],
      l: ['3rem', '1'],
      lx: ['3.75rem', '1'],
      lxx: ['4.5rem', '1'],
      lxxx: ['6rem', '1'],
      lxxxx: ['8rem', '1'],
    },

    extend: {

      spacing: {
        3.25: '0.84rem',
        94: '23rem',
        98: '32rem',
        17: '-4.4rem',

      },
      },
    
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

