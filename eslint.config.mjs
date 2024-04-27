import globals from "globals";
// 引入预定义配置
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// 在vue 项目中配置 eslint 时，也可以通过parserOptions.parser属性来指定解析<script>标签的解析器。
// vue-eslint-parser 本身是个解析器，包含的规则较少，所以一般会配合eslint-plugin-vue一起使用，以提供更多的规则和功能
import pluginVue from "eslint-plugin-vue";
import vueParser from 'vue-eslint-parser';

import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    // 如果一个配置对象只有ignores没有其他字段，它会全局生效。
    // 如果一个配置对象既有ignores也有rules，它只在该配置对象范围内生效。
    // 如果某个配置对象没有files字段，则该配置会对全局都生效。
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ignores: ['**/node_modules/**', '**/dist', ".git/**"],
  },

  // pluginJs 的 ESLint 插件的推荐配置。这个插件可能提供了一些特定的规则集，
  // 继承了@eslint/js提供的recommended（推荐）配置，它是一个配置好的数组，
  // .recommended 通常意味着这是一组默认推荐的规则，适用于大多数 JavaScript 项目。
  // 将其解构然后添加到我们的数组就可以实现继承了，如果有需要自定义或覆盖的rules，新增一个配置对象即可
  pluginJs.configs.recommended,

  // 这里使用了 ES6 的展开语法（spread syntax）来合并 tseslint.configs.recommended 数组中的配置。
  // tseslint 可能是专为 TypeScript 设计的 ESLint 插件或配置集。
  // .recommended 类似地表示这是一组推荐的规则，但更侧重于 TypeScript 代码的规范。
  ...tseslint.configs.recommended,

  // pluginVue 是 Vue.js 的 ESLint 插件。Vue.js 是一个流行的前端框架，
  // 而它的 ESLint 插件则提供了一系列规则来确保 Vue 组件的代码质量和一致性。
  // ["flat/essential"] 似乎是指定了一个特定的配置集，可能是 flat 风格下的 essential 配置，
  // 这意味着它只包含 Vue.js 代码中必不可少的一些规则。

  // 由于eslint-plugin-vue提供的 flat/recommended 默认并不支持ts，因此需要我们手动指定parser
  ...pluginVue.configs["flat/essential"],
  // 关闭所有可能干扰prettier规则的eslint规则，要确保其放在后面
  eslintConfigPrettier,

  // 为使用ts的vue指定parser 值对.vue文件生效 否则vue中ts语法不识别
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        sourceType: 'module',
        parser: {
          ts: tseslint.parser,
        },
      },
    },
  },
  // 自定义的规则要放在后面，避免被导入的预置的规则覆盖而失效
  {
    rules: {
      // 自定义规则
      'vue/multi-word-component-names': 'off', // 禁用多单词组件名称规则 

      // "warn" 表示如果违反缩进规则，将报告一个警告 error。
      // 2 表示每一级缩进应该使用2个空格。
      // { "SwitchCase": 1 } 是一个选项对象，它指定了在switch语句的case子句中使用1个空格的缩进，
      // 而不是默认的2个空格。
      // "indent": ["warn", 2, { "SwitchCase": 1 }]
      "indent": ["warn", 2]
    },
  },
];