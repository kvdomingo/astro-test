/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      screens: {
        "2xl": "1400px",
      },
      padding: "2rem",
      center: true,
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-opentype")],
};
