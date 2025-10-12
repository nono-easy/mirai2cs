// eslint.config.js (Flat config for ESLint 9)
import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import prettier from '@vue/eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  // 忽略目录/文件（先不 lint markdown）
  { ignores: ['dist', 'node_modules', '.pnpm', '**/*.md'] },

  // JS 推荐
  js.configs.recommended,

  // Vue 基础规则
  ...vue.configs['flat/essential'],

  // 仅 .vue：用 vue-eslint-parser，并在其内用 TS 解析器
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsparser,
        ecmaVersion: 2023,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      ...tseslint.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // 仅 .ts/.js：用 TS 解析器
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // 声明文件：关闭容易误报的两条规则
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Node 配置文件的全局：修复 process 未定义
  {
    files: [
      'vite.config.*',
      'eslint.config.*',
      '**/*.config.*',
      '**/*.config.{ts,cts,mts,js,cjs,mjs}',
    ],
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
  },

  // 与 Prettier 协同
  prettier,
]
