import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';
import pluginJs from '@eslint/js';


export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    ignores: ['dist', 'node_modules'],

    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['off'],
      '@stylistic/js/no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/arrow-spacing': ['error', { 'before': true, 'after': true }]
    }
  }
];
