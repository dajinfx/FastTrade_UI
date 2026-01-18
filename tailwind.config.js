/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f14',
        panel: '#111827',
        border: '#1f2937',
        text: '#d1d5db',
        muted: '#6b7280',
        accent: '#22d3ee',
        danger: '#ef4444',
        success: '#22c55e',
      },
    },
  },
  plugins: [],
}
