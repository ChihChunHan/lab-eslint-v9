# 環境
- node.js v20
- vscode extension: ESLint, prettier
- vscode setting: "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
- eslint v9.0.0

# branch

| branch name | |
| --- | --- |
| 1-js | 安裝安裝 eslint && 初始化 eslint.config.js && 設定js.configs.recommended |
| 2-prettier | 安裝 prettier 初始化 .prettierrc.js |
| 3-eslint-prettier | 安裝 eslint-plugin-prettier eslint-config-prettier && eslint fixAll use prettier format on save |
| 4-vue | 安裝 eslint-plugin-vue && 設定pluginVue.configs["flat/recommended"] |
| 5-vitest | 設定單元測試規則 |

# 摘要
https://eslint.org/docs/latest/use/migrate-to-9.0.0

## Node.js < v18.18, v19 are no longer supported
- Node.js v18.18.0 and above
- Node.js v20.9.0 and above
- Node.js v21 and above
## New default config format (`eslint.config.js`)
https://eslint.org/docs/latest/use/configure/configuration-files
### before
```js
// exlintrc.js

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
```
### after
```js
// eslint.config.js

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
]
```
覆蓋問題：
https://eslint.org/docs/latest/use/configure/configuration-files#cascading-configuration-objects
https://eslint.org/docs/latest/use/configure/rules#using-configuration-files
## Introducing ESLint Config Inspector
https://eslint.org/blog/2024/04/eslint-config-inspector/
工具
## Removed all formatters except `stylish`, `html`, `json`, and `json-with-meta`
formatter 棄用
## Removed `valid-jsdoc` and `require-jsdoc` rules
rule 移除
We have removed [`valid-jsdoc` and `require-jsdoc`](https://github.com/eslint/eslint/issues/15820). We recommend using the [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc) plugin instead.

## Configuration Migration Guide
https://eslint.org/docs/latest/use/configure/migration-guide
