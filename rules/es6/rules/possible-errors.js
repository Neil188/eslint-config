module.exports = {
    extends: './non-rules-config.js',
    rules: {
        'babel/no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true,
                'allowTernary': true
            }
        ],
        'babel/quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            },
        ],
        'babel/valid-typeof': 'error',

        'constructor-super': 'error',
        'no-await-in-loop': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-new-symbol': 'error',
        'no-this-before-super': 'error',
        'no-unused-expressions': 'off',

    },
}
