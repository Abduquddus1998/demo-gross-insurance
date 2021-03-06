module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:flowtype/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    require: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "flowtype"],
  rules: {
    "prettier/prettier": "error",
    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/aria-props": [0],
  },
};
