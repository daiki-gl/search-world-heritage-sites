/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primaryColor: '#1F2133',
        secondaryColor: '#303253',
        accentColor: '#9EA2DE',
        inputBgColor: '#D9D2FF',
        formBtnColor: '#9EA2DE',
      },
    },
  },
  plugins: [],
}
