import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(260 25% 6%)',
        foreground: 'hsl(30 15% 85%)',
        card: 'hsl(260 20% 12%)',
        'card-foreground': 'hsl(30 15% 85%)',
        primary: {
          DEFAULT: 'hsl(345 55% 60%)',
          foreground: 'hsl(260 25% 10%)',
        },
        secondary: {
          DEFAULT: 'hsl(260 15% 18%)',
          foreground: 'hsl(30 15% 85%)',
        },
        muted: {
          DEFAULT: 'hsl(260 12% 15%)',
          foreground: 'hsl(340 10% 55%)',
        },
        accent: {
          DEFAULT: 'hsl(345 55% 60%)',
          foreground: 'hsl(260 25% 10%)',
        },
        border: 'hsl(260 15% 26%)',
        ring: 'hsl(345 55% 60%)',
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
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        pulse: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        'glow-ambient': {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 0.4s ease forwards',
        pulse: 'pulse 2.5s ease-in-out infinite',
        'glow-ambient': 'glow-ambient 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
