import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: '#0B0E14',
        surface: 'rgba(255,255,255,0.04)',
        'surface-border': 'rgba(255,255,255,0.08)',
        purple: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        teal: {
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.25), transparent)',
      },
    },
  },
  plugins: [],
}

export default config
