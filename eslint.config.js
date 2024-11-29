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
