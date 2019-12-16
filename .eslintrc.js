module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    quotes: [2, "double", "avoid-escape"],
    "arrow-parens": [2, "as-needed"],
    "no-new": 0,
    "no-console": "off",
    "max-len": ["error", { code: 120 }],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-alert": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
