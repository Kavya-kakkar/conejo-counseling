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
        cream: "#FAF7F2",       // Top CTA background
        sage: "#7DA7A6",        // Bottom bar background
        sageText: "#659392",    // "FAMILY COUNSELING" text
        darkGray: "#333333",    // Main text
        lightGray: "#666666",   // Body text
        headingGray: "#555555", // Column headings
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;