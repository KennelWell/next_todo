import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        temp_gray: '#282C33',
        primary: '#88fa97',
        NEW: '#88fa97',
        ACTIVE: '#88fa97',
        DONE: 'yellow',
        FAILED: '#FFF',
      }
    },
  },
  plugins: [],
};
export default config;
