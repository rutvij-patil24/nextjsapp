/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-roboto)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        background: '#F1F5F9',
        card: '#FFFFFF',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        secondary: '#3B82F6',
        primary: '#1E293B',
      },
    },
  },
  plugins: [],
}
