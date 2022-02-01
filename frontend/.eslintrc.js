module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'better-styled-components',
  ],
  rules: {
    'react/jsx-filename-extension': [ 1, { extensions: [ '.tsx', '.ts' ] } ],
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'max-len': 'off',
    'simple-import-sort/imports': 'error',
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'better-styled-components/sort-declarations-alphabetically': 2,
    'indent': [ 'error', 2 ],
    'no-multi-spaces': [ 'error' ],
    'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 } ],
    'comma-dangle': [ 'error', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline', exports: 'always-multiline', functions: 'always-multiline' } ],
    'no-trailing-spaces': [ 'error', { skipBlankLines: false, ignoreComments: false } ],
    'space-in-parens': [ 'error', 'never' ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
      },
    },
  },
};
