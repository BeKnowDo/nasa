module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: false,
  },
  extends: [
    'next',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
  },
  rules: {
    '@next/next/no-img-element': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/no-named-as-default': 'off',
    'import/export': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    indent: [
      'off',
      2,
      {
        flatTernaryExpressions: true,
        offsetTernaryExpressions: true,
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-unreachable': 0,
    'no-async-promise-executor': 0,
    'react/display-name': 0,
    'react/jsx-no-undef': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
  },
}
