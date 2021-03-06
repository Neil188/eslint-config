module.exports = {
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'for-direction': 'error',
        'getter-return': ['error', { allowImplicit: true }],
        'no-async-promise-executor': 'error',
        'no-cond-assign': 'error',
        'no-console': 'warn',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-compare-neg-zero': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'off',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-misleading-character-class': 'warn',
        // 'no-negated-in-lhs': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'off',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-use-before-define': ['error', 'nofunc'],
        'require-atomic-updates': 'warn',
        'require-unicode-regexp': 'off',
        'use-isnan': 'error',
        'valid-jsdoc': ['error', { requireReturn: false }],
        'valid-typeof': 'error',
    },
}
