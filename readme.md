# eslint-config

ESLint rules for my personal projects.

## Usage

Install using:

```bash
npm install --save-dev eslint @neil188/eslint-config
```

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
