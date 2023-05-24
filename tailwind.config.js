const theme = require("./config/theme.json");

let fontPrimary, fontPrimaryType, fontSecondary, fontSecondaryType;
if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondary = theme.fonts.font_family.secondary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3.75rem',
        xl: '0',
      },
    },
    extend: {
      colors: {
        dark: theme.colors.default.text_color.primary,
        light: theme.colors.default.text_color.secondary,
        primary: theme.colors.default.theme_color.primary,
        secondary: theme.colors.default.theme_color.secondary,
        border: theme.colors.default.theme_color.border,
        body: theme.colors.default.theme_color.primary,
        border: theme.colors.default.theme_color.border,
        "theme-light": theme.colors.default.theme_color.theme_light,
      },
      fontSize: {
        base: "16px",
        h1: "48px",
        "h1-sm": "38px",
        h2: "36px",
        "h2-sm": "28px",
        h3: "20px",
        "h3-sm": "16px",
        subtit_1: "20px",
        subtit_2: "16px",
        button_1: "20px",
        button_2: "16px",
        body: "16px",
      },
      lineHeight: {
        base: "24px",
        h1: "64px",
        h2: "44px",
        h3: "28px",
        subtit_1: "32px",
        subtit_2: "24px",
        button_1: "0",
        button_2: "0",
        body: "16px",
      },
      fontWeight: {
        h1: 700,
        h2: 700,
        h3: 500,
        subtit_1: 400,
        subtit_2: 500,
        button_1: 500,
        button_2: 500,
        body: 400,
      },
      fontFamily: {
        primary: [fontPrimary, fontPrimaryType],
        secondary: [fontSecondary, fontSecondaryType],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({ generateContainer: false }),
  ],
  // important: true,
};
