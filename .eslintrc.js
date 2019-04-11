module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['plugin:vue/recommended', 'prettier'],
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
            },
        ],
    },
}
