const prettier = require('./.prettierrc.json')

module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettier, { usePrettierrc: false }]
  }
}
