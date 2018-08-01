module.exports = {
    extends: './non-rules-config.js',
    rules: {
        'import/first': 'error',
        // 'import/imports-first': 'error',
        'import/no-anonymous-default-export': 'off',
        'import/no-absolute-path': 'error',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': 'error',
        'global-require': 'off',
        'import/no-internal-modules': 'off',
        'import/no-mutable-exports': 'error',
        'import/no-restricted-paths': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-webpack-loader-syntax': 'error',
    },
}
