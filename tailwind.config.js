/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#4ade80',
          500: '#25D366',
          600: '#128C7E',
          700: '#0d6e62',
          800: '#075E54',
        },
        purple: {
          500: '#6C5CE7',
          600: '#5a4bd1',
        },
        dark: {
          900: '#0F0F1A',
          800: '#1A1A2E',
          700: '#16213E',
          600: '#1e2a45',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 50%, #0F1A2E 100%)',
        'green-gradient': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        'purple-gradient': 'linear-gradient(135deg, #6C5CE7 0%, #a29bfe 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
