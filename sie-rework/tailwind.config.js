/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        gob: {
          layout: {},
          colors: {
            white: "#FFFFFF",
            black: "#000000",
            background: "#ffffff",
            primary: "#052E16",
            secondary: "#8D0D30",
            tertiary: "#BC955C",
          },
        },
        ite: {
          layout: {},
          colors: {
            white: "#FFFFFF",
            black: "#000000",
            background: "#FFFFFF",
            primary: "#003566",
            secondary: "#0466c8",
            tertiary: "#ffc300",
          },
        },
      },
    }),
  ],
};
