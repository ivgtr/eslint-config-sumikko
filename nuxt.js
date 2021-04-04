'use strict'

module.exports = {
  extends: ['./node.js', './browser.js', '@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended'],
  overrides: [
    {
      files: ['*.vue'],
      processor: 'vue/.vue'
    }
  ]
}
