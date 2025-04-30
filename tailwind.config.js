/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // move left by 50%
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 20s) linear infinite var(--animation-direction, forwards)",
      },
    },
  },
  plugins: [],
};
