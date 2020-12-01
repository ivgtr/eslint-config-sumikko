module.exports = {
  extends: [
    './lib/meta.js',
    './lib/es2015.js',
    './lib/es2016.js',
    './lib/es2017.js',
    './lib/es2018.js',
    './lib/es2019.js'
  ],
  rules: {
    'no-console': 1,
    yoda: 2,
    'no-unused-vars': 1,
    quotes: [2, 'single'],
    'no-var': 2,
    'prefer-const': 2
  }
}
