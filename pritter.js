const prettier = require('./.prettierrc.json')

module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier/@typescript-eslint', 'prettier/unicorn'],
  rules: {
    'prettier/prettier': ['error', prettier, { usePrettierrc: false }]
  }
}
