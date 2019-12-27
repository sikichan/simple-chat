module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error': 'off',
    'prefer-template': 'off',
    'object-shorthand': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
