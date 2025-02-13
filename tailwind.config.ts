import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";
import tailwindForms from "@tailwindcss/forms";
import tailwindTypography from "@tailwindcss/typography";
import tailwindAnimate from "tailwindcss-animate";
import tailwindContainerQueries from "@tailwindcss/container-queries";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    fontFamily: false,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindContainerQueries,
    tailwindTypography(),
    addDynamicIconSelectors({
      scale: 0,
    }),
    tailwindForms({
      strategy: "class",
    }),
    plugin(function ({ theme, addVariant, addUtilities, matchUtilities }) {
      addVariant("thumb", [
        "&::-webkit-slider-thumb",
        "&::-moz-range-thumb",
        "&::-ms-thumb",
      ]);
      addVariant("track", [
        "&::-webkit-slider-runnable-track",
        "&::-moz-range-track",
        "&::-ms-track",
      ]);
      addVariant("valid", ["&[data-valid]"]);
      addVariant("invalid", ["&[data-invalid]"]);
      addVariant("forced-colors", "@media (forced-colors: active)");
      addUtilities({
        "[hidden=until-found]": {
          "@supports (content-visibility:hidden)": {
            display: "inherit",
            "content-visibility": "hidden",
          },
        },
      });

      matchUtilities(
        {
          font: (value) => {
            const { fontFamily, multiplier } = value;

            return {
              "--font-normalization": multiplier,
              fontFamily: fontFamily,
            };
          },
        },
        {
          values: theme("fontFamily"),
        },
      );
    }),
  ],
} satisfies Config;
