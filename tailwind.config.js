import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1152px' },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0058be',
          50: '#e6efff',
          100: '#cfe0ff',
          200: '#a3c2ff',
          300: '#75a3ff',
          400: '#4682f7',
          500: '#0058be',
          600: '#004599',
          700: '#003473',
          800: '#00254f',
          900: '#00152d',
        },
        secondary: {
          DEFAULT: '#00687a',
          50: '#e2f7fb',
          100: '#c4eef5',
          500: '#00687a',
          600: '#005461',
          700: '#003f49',
        },
        tertiary: {
          DEFAULT: '#924700',
          500: '#924700',
          600: '#763900',
        },
        surface: {
          DEFAULT: '#f9f9ff',
          dim: '#d9d9e0',
          bright: '#f9f9ff',
          'container-lowest': '#ffffff',
          'container-low': '#f3f3fa',
          container: '#edeef5',
          'container-high': '#e7e8ef',
          'container-highest': '#e2e2e9',
        },
        'on-surface': '#191b23',
        'on-surface-variant': '#424754',
        outline: '#727785',
        'outline-variant': '#dde0e8',
        'on-secondary-fixed': '#001f25',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        symbols: ['Material Symbols Outlined', 'sans-serif'],
      },
      fontSize: {
        display: ['3.85rem', { lineHeight: '1.02', letterSpacing: '0', fontWeight: '700' }],
        h1: ['2.7rem', { lineHeight: '1.08', letterSpacing: '0', fontWeight: '700' }],
        h2: ['2.05rem', { lineHeight: '1.18', letterSpacing: '0', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.65', fontWeight: '400' }],
        'label-sm': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2.5rem',
        '2xl': '4rem',
      },
      borderRadius: {
        lg: '0.375rem',
        xl: '0.5rem',
        '2xl': '0.5rem',
        '3xl': '0.5rem',
      },
      boxShadow: {
        low: '0 4px 20px rgba(0,0,0,0.03)',
        med: '0 6px 24px rgba(0,0,0,0.05)',
        high: '0 10px 30px rgba(0,0,0,0.06)',
        glow: '0 0 0 3px rgba(0,88,190,0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [typography],
};
