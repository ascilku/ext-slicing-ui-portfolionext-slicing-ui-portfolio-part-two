/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        text: {
          100: "#1C1C1C",
          200: "#212838",
          400: "#373737",
          500: "#FFFFFF",
        },
        brand: "#FF6525",
        green: "#E3EBD6",
        background: "#FAF8F4",
      },
      fontSize: {
        "1rem": "16px",
        "17rem": "60px",
      },
    },
  },
  plugins: [],
};
