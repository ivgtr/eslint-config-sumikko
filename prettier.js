const prettier = require('./.prettierrc.json')

module.exports = {
  extends: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettier, { usePrettierrc: false }]
  }
}
