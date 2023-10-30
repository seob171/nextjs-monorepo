import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--poppins-font)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        modal: "10",
        dropdown: "5",
      },
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        tertiary: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },

        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".icon-filter-primary50": {
          filter:
            "invert(86%) sepia(10%) saturate(210%) hue-rotate(82deg) brightness(113%) contrast(98%)",
        },
        ".icon-filter-primary100": {
          filter:
            "invert(87%) sepia(14%) saturate(252%) hue-rotate(88deg) brightness(104%) contrast(104%)",
        },
        ".icon-filter-primary200": {
          filter:
            "invert(87%) sepia(24%) saturate(344%) hue-rotate(85deg) brightness(104%) contrast(94%)",
        },
        ".icon-filter-primary300": {
          filter:
            "invert(87%) sepia(30%) saturate(597%) hue-rotate(76deg) brightness(99%) contrast(89%)",
        },
        ".icon-filter-primary400": {
          filter:
            "invert(89%) sepia(10%) saturate(2579%) hue-rotate(75deg) brightness(87%) contrast(99%)",
        },
        ".icon-filter-primary500": {
          filter:
            "invert(61%) sepia(22%) saturate(1374%) hue-rotate(89deg) brightness(95%) contrast(96%)",
        },
        ".icon-filter-primary600": {
          filter:
            "invert(42%) sepia(97%) saturate(2057%) hue-rotate(115deg) brightness(92%) contrast(83%)",
        },
        ".icon-filter-primary700": {
          filter:
            "invert(25%) sepia(52%) saturate(3159%) hue-rotate(132deg) brightness(93%) contrast(84%)",
        },
        ".icon-filter-primary800": {
          filter:
            "invert(8%) sepia(96%) saturate(6042%) hue-rotate(157deg) brightness(111%) contrast(83%)",
        },
        ".icon-filter-primary900": {
          filter:
            "invert(23%) sepia(27%) saturate(1163%) hue-rotate(91deg) brightness(100%) contrast(91%)",
        },
        ".icon-filter-primary950": {
          filter:
            "invert(12%) sepia(67%) saturate(534%) hue-rotate(92deg) brightness(100%) contrast(99%)",
        },
        ".icon-filter-secondary50": {
          filter:
            "invert(81%) sepia(46%) saturate(137%) hue-rotate(192deg) brightness(109%) contrast(102%)",
        },
        ".icon-filter-secondary100": {
          filter:
            "invert(86%) sepia(11%) saturate(610%) hue-rotate(185deg) brightness(108%) contrast(99%)",
        },
        ".icon-filter-secondary200": {
          filter:
            "invert(91%) sepia(45%) saturate(6478%) hue-rotate(172deg) brightness(101%) contrast(98%)",
        },
        ".icon-filter-secondary300": {
          filter:
            "invert(71%) sepia(15%) saturate(1197%) hue-rotate(161deg) brightness(106%) contrast(98%)",
        },
        ".icon-filter-secondary400": {
          filter:
            "invert(67%) sepia(40%) saturate(2261%) hue-rotate(167deg) brightness(99%) contrast(96%)",
        },
        ".icon-filter-secondary500": {
          filter:
            "invert(56%) sepia(55%) saturate(2716%) hue-rotate(165deg) brightness(93%) contrast(95%)",
        },
        ".icon-filter-secondary600": {
          filter:
            "invert(46%) sepia(71%) saturate(7187%) hue-rotate(182deg) brightness(99%) contrast(98%)",
        },
        ".icon-filter-secondary700": {
          filter:
            "invert(14%) sepia(72%) saturate(5062%) hue-rotate(189deg) brightness(104%) contrast(98%)",
        },
        ".icon-filter-secondary800": {
          filter:
            "invert(22%) sepia(68%) saturate(2155%) hue-rotate(180deg) brightness(89%) contrast(94%)",
        },
        ".icon-filter-secondary900": {
          filter:
            "invert(19%) sepia(44%) saturate(2596%) hue-rotate(178deg) brightness(93%) contrast(91%)",
        },
        ".icon-filter-secondary950": {
          filter:
            "invert(15%) sepia(14%) saturate(4527%) hue-rotate(172deg) brightness(93%) contrast(97%)",
        },
        ".icon-filter-tertiary50": {
          filter:
            "invert(99%) sepia(1%) saturate(107%) hue-rotate(70deg) brightness(119%) contrast(96%)",
        },
        ".icon-filter-tertiary100": {
          filter:
            "invert(91%) sepia(6%) saturate(19%) hue-rotate(202deg) brightness(103%) contrast(100%)",
        },
        ".icon-filter-tertiary200": {
          filter:
            "invert(96%) sepia(7%) saturate(58%) hue-rotate(202deg) brightness(93%) contrast(98%)",
        },
        ".icon-filter-tertiary300": {
          filter:
            "invert(80%) sepia(32%) saturate(18%) hue-rotate(201deg) brightness(98%) contrast(97%)",
        },
        ".icon-filter-tertiary400": {
          filter:
            "invert(73%) sepia(7%) saturate(251%) hue-rotate(202deg) brightness(88%) contrast(86%)",
        },
        ".icon-filter-tertiary500": {
          filter:
            "invert(47%) sepia(9%) saturate(311%) hue-rotate(202deg) brightness(92%) contrast(89%)",
        },
        ".icon-filter-tertiary600": {
          filter:
            "invert(31%) sepia(7%) saturate(652%) hue-rotate(202deg) brightness(92%) contrast(84%)",
        },
        ".icon-filter-tertiary700": {
          filter:
            "invert(21%) sepia(11%) saturate(478%) hue-rotate(201deg) brightness(91%) contrast(82%)",
        },
        ".icon-filter-tertiary800": {
          filter:
            "invert(12%) sepia(6%) saturate(487%) hue-rotate(201deg) brightness(102%) contrast(93%)",
        },
        ".icon-filter-tertiary900": {
          filter:
            "invert(5%) sepia(6%) saturate(1113%) hue-rotate(201deg) brightness(96%) contrast(91%)",
        },
        ".icon-filter-tertiary950": {
          filter:
            "invert(3%) sepia(4%) saturate(2350%) hue-rotate(201deg) brightness(92%) contrast(98%)",
        },

        ".icon-filter-white": {
          filter:
            "invert(99%) sepia(72%) saturate(0%) hue-rotate(109deg) brightness(107%) contrast(100%)",
        },
      });
    }),
  ],
};
export default config;
