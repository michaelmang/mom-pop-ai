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
      },
      colors: {
        paper: '#F7F4EE',
        ink: '#1C1917',
        mute: '#57534E',
        line: '#E4DFD4',
        navy: {
          DEFAULT: '#1E3A5F',
          hover: '#16304F',
        },
      },
    },
  },
  plugins: [],
}

export default config
