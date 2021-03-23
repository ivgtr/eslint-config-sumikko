'use strict'

module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', './browser.js'],
  overrides: [
    {
      files: ['*.vue'],
      processor: 'vue/.vue'
    }
  ]
}
