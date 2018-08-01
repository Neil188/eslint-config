module.exports = {
    rules: {
        'react/jsx-boolean-value': 'off',
        'react/jsx-child-element-spacing': 'warn',
        'react/jsx-curly-brace-presence': [
            'warn',
            { props: 'never', children: 'ignore' },
        ],
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
        'react/jsx-handler-names': 'off',
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-key': 'error',
        'react/jsx-max-depth': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-sort-props': 'off',
        'react/jsx-sort-default-props': 'off',
        'react/jsx-tag-spacing': [
            'error',
            {
                'closingSlash': 'never',
                'beforeSelfClosing': 'always',
                'afterOpening': 'never'
            }
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    }
}
