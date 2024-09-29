const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReact = require("eslint-plugin-react");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineNuxtPlugin: 'readonly', 
  extends: [
    "eslint:recommended", 
    "plugin:vue/vue3-recommended", 
    "plugin:prettier/recommended"
  ],
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      languageOptions: {
        globals: globals.browser,
      },
    },
  ],
  rules: {
    
  },
};
