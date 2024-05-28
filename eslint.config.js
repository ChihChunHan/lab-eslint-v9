import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  // https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations
  js.configs.recommended,
  // https://eslint.vuejs.org/user-guide/
  ...pluginVue.configs["flat/recommended"],
  // https://github.com/prettier/eslint-plugin-prettier#configuration-new-eslintconfigjs
  eslintPluginPrettierRecommended,
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        suite: "writable",
        test: "writable",
        describe: "writable",
        it: "writable",
        expect: "writable",
        assert: "writable",
        vitest: "writable",
        vi: "writable",
        beforeAll: "writable",
        afterAll: "writable",
        beforeEach: "writable",
        afterEach: "writable"
      }
    }
  }
];
