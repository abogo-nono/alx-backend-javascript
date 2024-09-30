// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // Customize your rules here
    },
});
