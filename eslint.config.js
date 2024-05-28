import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  // https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations
  js.configs.recommended,
  // https://github.com/prettier/eslint-plugin-prettier#configuration-new-eslintconfigjs
  eslintPluginPrettierRecommended
];
