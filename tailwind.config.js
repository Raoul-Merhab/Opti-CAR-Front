/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gris:"#DCDCDC",
        rouge:"#EC4E0B",
        orange:"#EC9F0B",
        vert:"#05CD99 ",
        bleu:"#0070FF"
      },
    },
  },
  plugins: [],
};
