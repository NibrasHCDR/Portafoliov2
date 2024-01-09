import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald','sans-serif'],
        darkergrotesque: ['Darker Grotesque','sans-serif'],
        montserrat: ['Montserrat','sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
        unicaone: ['Unica One','sans-serif'],
        mojormono: ['Major Mono Display','monospace'],
        tangerine: ['Tangerine', 'cursive'],
        cinzeldecorative: ['Cinzel Decorative', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        oreglega: ['EB Garamond', 'serif'],
        philosopher: ['Philosopher','sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
