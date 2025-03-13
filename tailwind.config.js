/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-red-500", "text-white", "font-bold", "flex", "items-center", "justify-center",
    "min-h-screen", "text-4xl", "bg-gray-900", "text-white"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
