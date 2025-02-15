/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,.ce}"],
  output: "./dist/tailwind.css",
  theme: {
    extend: {
      colors: {
        v_white_one: "#f8f8f8",
        v_white_two: "#f0f7da",
        v_white_three: "#f3f4f6",
        v_dark_green: "#234d20",
        v_light_green: "#77ab59",
        v_green: "#36802d",
        v_light_green2: "rgba(74, 217, 137, 0.1)",
        v_dark_blue: "#09092A",
        v_blue: "#202c53",
        v_light_blue: "rgba(46, 124, 221, 0.1)",
        v_gray: "rgba(255, 255, 255, 0.8)",
        v_medium_gray: "#9D9797",
        v_dark_gray: "#606060",
        v_dark_gray2: "#343434",
        v_dark_gray3: "#787888",
        v_gray3: "#7a7a7a",
        v_light_gray: "rgba(157, 151, 151, 0.1)",
        v_red: "#FF0F00",
        v_yellow: "#d19300",
        v_orange: "#FFA500",
        v_light_red: "rgba(255, 0, 0, 0.1)",
        v_light_brown: "rgba(101, 67, 33, 0.5)",
        v_light_yellow: "rgba(255, 194, 34, 0.2)",
        v_light_orange: "rgba(255, 165, 0, 0.1)",
      },
    },
    screens: {
      sm: { min: "0px", max: "767px" },
      // => @media (min-width: 200px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px) { ... }

      xl: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
