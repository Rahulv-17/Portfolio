/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Photograph-derived Warm Editorial Palette
        terracotta: {
          50: '#fdf6f0',
          100: '#faede0',
          200: '#f5dac4',
          300: '#eec29f',
          400: '#e5a374',
          500: '#d97736', // Primary Accent
          600: '#c46830',
          700: '#a35028',
          800: '#85503c', // Embroidery Mocha
          900: '#68473a',
          950: '#38221b',
        },
        linen: {
          50: '#fdfcf9',
          100: '#fbf8f3',
          200: '#f6f1ea',
          300: '#eee6db',
          400: '#dfd4c5',
          500: '#ccc2bb', // Shirt tone
          600: '#9d9186',
          700: '#6e655c',
          800: '#48413b',
          900: '#2c2724',
          950: '#171412', // Obsidian Espresso
        },
        sand: {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e9e2d3',
          300: '#dbcfb9',
          400: '#c8b79b',
          500: '#b29c7d',
        },
        obsidian: {
          900: '#141211',
          950: '#0c0b0a',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'warm': '0 20px 40px -15px rgba(133, 80, 60, 0.08)',
        'warm-lg': '0 30px 60px -20px rgba(133, 80, 60, 0.14)',
        'glow': '0 0 50px -10px rgba(217, 119, 54, 0.35)',
        'glow-subtle': '0 0 35px -5px rgba(217, 119, 54, 0.18)',
        'inner-warm': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

