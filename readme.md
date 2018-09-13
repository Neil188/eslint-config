# eslint-config

[![npm version](https://img.shields.io/npm/v/@neil188/eslint-config.svg?style=popout)](https://www.npmjs.com/package/@neil188/eslint-config)
[![Travis build](https://img.shields.io/travis/Neil188/eslint-config/master.svg?style=popout)](https://travis-ci.org/Neil188/eslint-config)
[![NpmLicense](https://img.shields.io/npm/l/@neil188/eslint-config.svg?style=popout)](https://www.npmjs.com/package/@neil188/eslint-config)
[![GitHub last commit (master)](https://img.shields.io/github/last-commit/neil188/eslint-config/master.svg?style=popout)](https://github.com/Neil188/eslint-config) [![Greenkeeper badge](https://badges.greenkeeper.io/Neil188/eslint-config.svg)](https://greenkeeper.io/)

ESLint rules for my personal projects.
Setup copied from [Kent C Dodds eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds).
With some config settings copied from the [airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

For a guide on setting up a shareable config file see the [ESlint guide](https://eslint.org/docs/developer-guide/shareable-configs).

## Usage

Install using:

```bash
npm install --save-dev eslint @neil188/eslint-config
```

Note:
The following are included in this package so you don't need to install them yourself:

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
