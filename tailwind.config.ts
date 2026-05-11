import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(240 26% 8%)',
        foreground: 'hsl(40 28% 83%)',
        card: 'hsl(240 28% 14%)',
        'card-foreground': 'hsl(40 28% 83%)',
        primary: {
          DEFAULT: 'hsl(39 46% 61%)',
          foreground: 'hsl(240 28% 14%)',
        },
        secondary: {
          DEFAULT: 'hsl(240 23% 17%)',
          foreground: 'hsl(40 28% 83%)',
        },
        muted: {
          DEFAULT: 'hsl(240 20% 14%)',
          foreground: 'hsl(33 5% 52%)',
        },
        accent: {
          DEFAULT: 'hsl(39 46% 61%)',
          foreground: 'hsl(240 28% 14%)',
        },
        border: 'hsl(240 22% 26%)',
        ring: 'hsl(39 46% 61%)',
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'STSong', 'Songti SC', 'SimSun', 'serif'],
        sans: ['PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.4s ease forwards',
        pulse: 'pulse 2s ease-in-out infinite 0.6s',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
