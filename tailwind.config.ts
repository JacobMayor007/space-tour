import { Barlow, Bellefair } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barlowCondensed:["Barlow Condensed"],
        bellefair:["Bellefair"],
        barlow:["Barlow"],
      },
      keyframes: {
        transformX: {
          '0%': { transform: 'translateX(-2000px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
     animation: {
        'spin-slow': 'spin 7s linear infinite',
       'transformX': 'transformX 0.5s ease-in-out forwards', 
      }
    },
  },
  plugins: [],
};
export default config;
