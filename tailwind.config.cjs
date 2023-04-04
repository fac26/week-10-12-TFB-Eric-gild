/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#3E625C', //green
        accentcolor1: '#73059E', //purple
        accentcolor2: '#F9F9F9', //off-white
        accentcolor3: '#F5E8DA', //cream
        accentcolor4: '#540375', //dark-purple
      },
      fontFamily: {
        cursive: ['Jomhuria', 'cursive'],
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Finger Paint', 'cursive'],
      },
      fontSize: {
        base: ['2.8rem', '1.5rem'],
        custom: ['1.8rem', '1.25rem'],
        small: ['1rem', '1rem'],
      },
      backgroundImage: {
        'hero-image': "url('/bg-image.png')",
        'hero-image-phone': "url('/bg-image-phone-new.png')",
      },
      boxShadow: {
        custom: '0 1px 3px 0 rgba(255, 255, 255, 0.3)',
      },
    },
    plugins: [],
  },
};
