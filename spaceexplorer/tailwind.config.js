/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1736px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'home-space': "url('/home-space.jpg')",
      }
    },
  }
}
