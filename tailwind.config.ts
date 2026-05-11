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
