/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  importOrder: [
    "^astro(.*)",
    "^@astrojs/(.*)",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: false,
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  plugins: [
    "prettier-plugin-astro",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
