'use strict'

module.exports = {
  extends: [
    './index.js',
    './ts.js',
    'plugin:react/recommended',
    './browser.js',
    './prettier.js',
    'prettier/react'
  ],
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
