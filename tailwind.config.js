/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barber: {
          dark: '#111315',
          darker: '#0a0b0c',
          card: '#181b1e',
          border: '#262a2f',
          red: '#c92a2a',
          blue: '#1971c2',
          gold: '#d4af37',
          goldLight: '#f3d97b',
          silver: '#e9ecef',
          muted: '#8b949e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cinzel', 'Oswald', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
