'use strict'

module.exports = {
  extends: [
    './index.js',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
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
