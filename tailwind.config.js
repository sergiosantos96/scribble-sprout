/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* Colors */
      colors: {
        white: "#F9FAFE",
        primaryBlue: "#1353DD",
        darkBlue: "#051C2E",
        gray: "#53657C",
        borderColor: "rgba(154, 154, 154, 0.2)",
        dangerousRed: "#DE3200",

        /* Icon Colors */
        iconGreen: "#158A28",
      },
      /* Font */
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
