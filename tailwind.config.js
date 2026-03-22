/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-card': '#0A0A0A',
        'dark-border': '#1a1a1a',
        'electric-blue': '#0066FF',
        'electric-blue-glow': '#0066FF',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backdropBlur: {
        xs: '4px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'glow-blue': '0 0 20px rgba(0, 102, 255, 0.3)',
        'glow-blue-strong': '0 0 30px rgba(0, 102, 255, 0.5)',
      },
    },
  },
  plugins: [],
}