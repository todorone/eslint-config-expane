module.exports = {
    extends: ['standard', 'standard-react', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'jest'],
    'env': {
      'browser': true,
      'jest': true
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 2,
      '@typescript-eslint/no-unused-expressions': 2,
      'react/jsx-key': 2,
      'max-params': ['error', 4],
      'no-unused-expressions': 0,
      'no-unused-vars': 0,
      'no-use-before-define': 0,
      'prettier/prettier': [
        'error',
        {
          'printWidth': 100,
          'singleQuote': true,
          'trailingComma': 'all',
          'semi': false,
        },
      ],
    },
    globals: {
      __DEV__: true,
      JSX: true,
      NodeJS: true,
    },
  }
