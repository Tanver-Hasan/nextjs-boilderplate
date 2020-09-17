module.exports = {
  extends: "plugin:react/recommended",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "react/react-in-jsx-scope": 0,
  },
};
