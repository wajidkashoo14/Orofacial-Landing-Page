/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: 'rgb(240, 242, 247)',
          100: 'rgb(217, 223, 240)',
          200: 'rgb(179, 191, 225)',
          300: 'rgb(141, 159, 210)',
          400: 'rgb(103, 127, 195)',
          500: 'rgb(74, 99, 180)',
          600: 'rgb(58, 79, 154)',
          700: 'rgb(45, 62, 124)',
          800: 'rgb(30, 45, 94)',
          900: 'rgb(21, 32, 64)',
          950: 'rgb(13, 20, 40)',
          DEFAULT: 'rgb(26, 39, 68)',
        },
        gold: {
          50: 'rgb(253, 249, 237)',
          100: 'rgb(250, 240, 204)',
          200: 'rgb(245, 222, 153)',
          300: 'rgb(240, 204, 102)',
          400: 'rgb(232, 182, 61)',
          500: 'rgb(201, 149, 42)',
          600: 'rgb(168, 117, 32)',
          700: 'rgb(134, 89, 24)',
          800: 'rgb(107, 69, 20)',
          900: 'rgb(82, 51, 16)',
          DEFAULT: 'rgb(201, 149, 42)',
        },
        cream: 'rgb(245, 242, 236)',
        offwhite: 'rgb(250, 249, 246)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
