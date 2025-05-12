import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        ["text-color"]: "#f3f3f3",
        eminence: "#572978",
        sediment: "#FCB34C",
        disabled: "#a187b0",
        ["grey-scale"]: "#aca9bb",
        link: "#008dff",
      },
    },
  },
  plugins: [],
} satisfies Config;
