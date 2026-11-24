import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      colors: {
        paper: '#0c0c0c',
        ink: '#F4F0E8',
        mute: 'rgba(244, 240, 232, 0.72)',
        line: 'rgba(255, 248, 235, 0.16)',
        surface: 'rgba(18, 16, 14, 0.48)',
        rose: {
          DEFAULT: '#E25A9A',
          soft: '#F07AB0',
        },
        leaf: '#5EC4BC',
        navy: {
          DEFAULT: '#E25A9A',
          hover: '#F07AB0',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // A slow pan across the background painting.
        drift: {
          '0%': { transform: 'scale(1.02) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.1) translate3d(-1.5%, -1%, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        drift: 'drift 60s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}

export default config
