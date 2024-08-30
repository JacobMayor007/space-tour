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
        fadeInOut: {
          '0%': { opacity: "0", transform: 'translateY(10px)' },
          '50%': { opacity: "1", transform: 'translateY(0)' },
          '100%': { opacity: "0", transform: 'translateY(-10px)' },
        },
      },
     animation: {
        'spin-slow': 'spin 7s linear infinite',
       'transformX': 'transformX 0.5s ease-in-out forwards', 
       'fade-in-out': 'fadeInOut 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
