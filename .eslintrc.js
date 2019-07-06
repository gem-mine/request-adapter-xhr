const path = require('path')

module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    },
    'sourceType': 'module'
  },
  'extends': [
    'standard',
    'import'
  ],
  'rules': {
    'no-debugger': 2,
    'no-var': 'error',
    'no-useless-call': 0,
    'linebreak-style': 0,
    'object-curly-newline': 0,
    'semi': ['error', 'never'],
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'never'],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'standard/no-callback-literal': 0,
  },
  'env': {
    'browser': true,
    'amd': true,
    'es6': true,
    'node': true
  }
}
