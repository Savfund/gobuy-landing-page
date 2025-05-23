import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        ["text-color"]: "#f3f3f3",
        eminence: "#3b83ac",
        sediment: "#FCB34C",
        disabled: "#a187b0",
        ["grey-scale"]: "#aca9bb",
        link: "#008dff",
      },
      screens: {
        mobile: { max: "768px" },
        desktop: { min: "1024px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
