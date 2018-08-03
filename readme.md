# eslint-config

ESLint rules for my personal projects.  Setup copied from [Kent C Dodds eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds) library.
With some config settings copied from the [airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

For additional information on setting up a shareable config file see the [ESlint guide](https://eslint.org/docs/developer-guide/shareable-configs)


## Usage

Install using:

```bash
npm install --save-dev eslint @neil188/eslint-config
```

Note: The following are included in this package so you don't need to install them yourself:

* eslint-config-prettier
* eslint-plugin-babel
* eslint-plugin-import
* eslint-plugin-jest
* eslint-plugin-jsx-a11y
* eslint-plugin-react
* eslint-plugin-security

Then in your ESLint config file extend the rules:

```json
{
    "extends": [
        "@neil188/eslint-config"
    ],
    "rules": {}
}
```

## Extra configs

To add react and jest rules use:

```json
{
    "extends": [
        "@neil188/eslint-config",
        "@neil188/eslint-config/react",
        "@neil188/eslint-config/jest"
    ]
}
```

## LICENSE

MIT
