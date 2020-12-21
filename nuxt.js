'use strict'

module.exports = {
  extends: [
    './index.js',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    './prettier.js',
    'prettier/vue',
    './browser.js'
  ],
  overrides: [
    {
      files: ['*.vue'],
      processor: 'vue/.vue'
    }
  ]
}
