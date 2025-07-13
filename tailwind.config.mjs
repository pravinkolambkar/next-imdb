/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Scan all these file types in src folder and its subdirectories
    './components/**/*.{html,js,ts,jsx,tsx}', // Scan these file types in components folder and subdirectories
    './pages/**/*.{html,js,ts,jsx,tsx}', // Scan these file types in pages folder and subdirectories
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  //darkmode: 'class',
}