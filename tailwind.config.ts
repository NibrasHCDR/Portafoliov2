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
        montserrat: ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}
export default config