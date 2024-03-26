import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navcolr: "#03001c",
        priClr: "#7e2cba",
        secClr: "#ffcdf5",
        actClr: "#5EBAB0",
        darkBgClr: "#242a32",
      },
      backgroundColor: {
        primary: "",
        light: "",
        bright: "#002147",
      },
      boxShadow: {
        insetsha: "inset 0px 0px 50px 30px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroImg: "/hero.svg",
      },
    },
  },
  plugins: [],
};
export default config;
