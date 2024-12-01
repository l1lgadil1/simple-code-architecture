import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylistic,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.es2021,
                React: 'readonly',
            },
            parserOptions: {
                project: './tsconfig.eslint.json',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'indent': ['error', 2],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'max-len': ['error', { 'code': 100 }],
            'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            '@typescript-eslint/member-delimiter-style': ['error', {
                'multiline': {
                    'delimiter': 'semi',
                    'requireLast': true
                },
                'singleline': {
                    'delimiter': 'semi',
                    'requireLast': false
                }
            }],
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        overrides: [
            {
                files: ['*.ts', '*.tsx'],
                parserOptions: {
                    project: './tsconfig.json',
                },
            },
        ],
    },
);
 