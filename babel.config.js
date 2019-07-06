const presets = []
const env = process.env.BABEL_ENV

const presetList = {
  lib: [
    '@babel/preset-env', {
      modules: 'cjs'
    }
  ],
  module: [
    '@babel/preset-env', {
      modules: false
    }
  ]
}

presets.push(presetList[env])

module.exports = {
  presets: [
    ...presets
  ],
  plugins: [
    'add-module-exports',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ]
}
