import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zain'],        
        serif: ['Gluten'],    
        mono: ['Darumadrop One'],
      },
      colors: {
        darkBlue: "#0B1734",
        deepOrange: "#EF6125",
        deepGreen: "#6bbd48",
        lightGreen: "#D2EBA8",
        lightOrange: "#FAD7B4",
      },
      width: {
        '1/7': '14.2857143%',
        '1/8': '12.5%',
        '1/9': '11.1111111%',
        '1/10': '10%',
        '2/7': '28.5714286%',
        '2/5': '40%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  plugins: [],
};

export default config;
