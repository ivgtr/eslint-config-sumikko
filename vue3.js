'use strict'

module.exports = {
  extends: ['plugin:vue/vue3-recommended', '@vue/typescript', './browser.js', './prettier.js'],
  overrides: [
    {
      files: ['*.vue'],
      processor: 'vue/.vue'
    }
  ]
}
