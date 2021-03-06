'use strict'

module.exports = {
  parserOptions: {
    ecmaVersion: 2019
  },
  rules: {
    // Fixable and supported in Node v10
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/prefer-optional-catch-binding': 2
  }
}
