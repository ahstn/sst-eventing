module.exports = {
  root: true,
  env: {
      browser: true,
      es2021: true
  },
  extends: [
      'standard',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
  },
  plugins: [
      '@typescript-eslint',
      'import'
  ],
  rules: {}
}
