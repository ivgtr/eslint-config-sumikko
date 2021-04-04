'use strict'

module.exports = {
  extends: ['./node.js', './browser.js', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.tsx'] }],
    'react/jsx-handler-names': 2,
    'react/prop-types': 'off'
  }
}
