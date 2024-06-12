import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#27323E',
        'custom-black':'#212529',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(108.35deg, #FC4A1A -36.03%, #FC4A1A -36.01%, #F7B733 128.44%)',
      },
      borderRadius: {
        'custom-radius': '40px 40px 40px 0px',
      },
      
    },
  },
  plugins: [],
};
export default config;
