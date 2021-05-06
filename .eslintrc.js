const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const ignorePackages = {
  js: 'never',
  jsx: 'never',
  ts: 'never',
  tsx: 'never',
};

module.exports = {
  extends: [
    'airbnb',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions,
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-useless-escape': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        semi: true,
        tabWidth: 2,
      },
    ],
    'import/extensions': ['error', 'ignorePackages', ignorePackages],
  },
  env: {
    browser: true,
    node: true,
    jest: false,
  },
  parser: 'babel-eslint',
};
