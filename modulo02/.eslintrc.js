module.exports = {
  env: {
    "es6": true,
    "node": true
  },
  extends: [
    "airbnb-base",
    "prettier"
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  plugins: [
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error",
    "class-method-use-this": "off",
    "no-param-reassgn": "off",
    "camelcase": "off",
    "no-unsaved-vars": ["error", { "argsIgnorePattern": "next" }],
  }
};
