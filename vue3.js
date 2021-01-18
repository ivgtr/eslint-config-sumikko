'use strict'

module.exports = {
  extends: [
    './index.js',
    'plugin:vue/vue3-recommended',
    '@vue/typescript',
    './browser.js',
    './prettier.js',
    'prettier/vue'
  ],
  overrides: [
    {
      files: ['*.vue'],
      processor: 'vue/.vue'
    }
  ]
}
