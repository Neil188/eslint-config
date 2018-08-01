module.exports = {

    env: {
        browser: true,
        node: true,
    },
    extends: [
        './rules/stylistic.js',
        './rules/best-practices.js',
        './rules/possible-errors.js',
        './rules/import/index.js',
        './rules/es6/index.js',
    ],
    rules: {},

};
