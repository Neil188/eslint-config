module.exports = {
    extends: ['prettier/react'],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        // set camelcase to warn to allow 'UNSAFE_'... lifecycle methods
        camelcase: [
            'warn',
            { properties: 'always' }
        ],
    }
}
