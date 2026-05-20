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
          DEFAULT: '#005fc6',
          50: '#eaf4ff',
          100: '#d6eaff',
          200: '#aad4ff',
          300: '#79bbff',
          400: '#48a1ff',
          500: '#005fc6',
          600: '#0053ad',
          700: '#00428a',
          800: '#00336b',
          900: '#00254d',
        },
        secondary: {
          DEFAULT: '#1e89fe',
          50: '#eef7ff',
          100: '#dcedff',
          500: '#1e89fe',
          600: '#0a73e8',
          700: '#005fc6',
        },
        tertiary: {
          DEFAULT: '#005fc6',
          500: '#005fc6',
          600: '#0053ad',
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
        'on-secondary-fixed': '#005fc6',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
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
        glow: '0 0 0 3px rgba(0,95,198,0.15)',
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
