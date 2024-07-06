import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    // fontSize: {
    //   'body-xxxl': '24px',
    //   'body-xxl': '20px',
    //   'body-xl': '18px',
    //   'body-lg': '16px',
    //   'body-md': '14px',
    //   'body-sm': '12px',
    // },
    colors: {
      primary: {
        primary: "#00B207",
        soft: "#84D187",
        hard: "#2C742F"

      },
      secondary: {
        warning: "#FF8A00",
        danger: "#EA4B48",
        info:"#2388FF"
      },
      white: "#ffffff",
      gray: {
        "gray9": "#1A1A1A",
        "gray8": "#333333",
        "gray7": "#4D4D4D",
        "gray6": "#666666",
        "gray5": "#808080",
        "gray4": "#999999",
        "gray3": "#B3B3B3",
        "gray2": "#CCCCCC",
        "gray1": "#E6E6E6",
        "gray.5": "#F2F2F2"
      },

      green: {
        "green9": "#002603",
        "green8": "#173B1A",
        "green7": "#2B572E",
        "green6": "#406B42",
        "green5": "#618062",
        "green4": "#7A997C",
        "green3": "#96B297",
        "green2": "#B4CCB4",
        "green1": "#DAE5DA",
        "green.5": "#EDF2EE"
      }


    },
    extend: {
      backgroundImage: {
        'breadcrumb-gradient': "linear-gradient(90.02deg, rgba(0, 0, 0, 0.7) 0.03%, rgba(0, 0, 0, 0) 91.31%), url('/images/common/breadcumb.png')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config

export default config