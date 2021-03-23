'use strict'

module.exports = {
  extends: ['plugin:react/recommended', './browser.js'],
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
