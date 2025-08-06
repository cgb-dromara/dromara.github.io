import pluginJs from "@eslint/js";
import pluginTs from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";
import vueEslintParser from "vue-eslint-parser";
import tsEslintParser from "@typescript-eslint/parser";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  // 1. 优先排除不需要检查的文件（放在最前面）
  {
    ignores: [
      "node_modules/**",
      ".vuepress/dist/**",
      ".vuepress/.temp/**",
      ".vuepress/.cache/**",
    ],
  },

  // 2. 基础推荐规则（对所有文件生效）
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],

  // 3. 全局语言选项配置（对所有文件生效）
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly",
        fetch: "readonly",
        console: "readonly",
        lang: "readonly",
      },
    },
  },

  // 4. TypeScript 和 Vue 特定配置（针对 .ts 和 .vue 文件）
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      parser: vueEslintParser, // 解析 .vue 文件
      parserOptions: {
        parser: tsEslintParser, // 解析 <script lang="ts"> 中的 TypeScript
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs, // 启用 TypeScript 插件
      vue: pluginVue, // 启用 Vue 插件
      prettier: pluginPrettier,
    },
    rules: {
      // 通用规则
      semi: ["error", "always"],
      // Vue 规则
      "vue/multi-word-component-names": "off",
      "vue/no-v-model-argument": "off",
      // Prettier 规则
      "prettier/prettier": "error",

      "@typescript-eslint/semi": "off",

      // 允许函数不显式声明返回类型
      "@typescript-eslint/explicit-function-return-type": "off",

      // 允许使用 any 类型（关闭禁止 any 的检查）
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      // 关闭严格的布尔表达式检查（允许 0、"" 等作为 falsy 值）
      "@typescript-eslint/strict-boolean-expressions": "off",

      // 关闭优先使用空值合并运算符（??）的检查
      "@typescript-eslint/prefer-nullish-coalescing": "off",
    },
  },

  // 5. JavaScript 文件的额外配置（如果需要）
  {
    files: ["**/*.js"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
