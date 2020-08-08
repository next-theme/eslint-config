# @next-theme/eslint-config

[![npm-image]][npm-url]
[![lic-image]](LICENSE)

[ESLint](https://www.github.com/eslint/eslint) config for projects under [theme NexT](https://github.com/next-theme) organization.

## Installation

![size-image]
[![dm-image]][npm-url]
[![dt-image]][npm-url]

There are two ways to install this configuration preset with `ESLint`: globally or locally (recommended).

### Global Installation

```bash
npm install -g eslint
npm install -g @next-theme/eslint-config
```

### Local Installation

```bash
npm install --save-dev eslint
npm install --save-dev @next-theme/eslint-config
```

## Usage

If the file `.eslintrc.json` does not exists in the required repository, you will need to create it:

```json
{
  "extends": "@next-theme",
  "root": true
}
```

Next, you can choose to install the ESLint plugin for your editor. For example, use [Visual Studio Code](https://github.com/Microsoft/vscode/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin installed.

[npm-image]: https://img.shields.io/npm/v/@next-theme/eslint-config.svg?style=flat-square
[lic-image]: https://img.shields.io/npm/l/@next-theme/eslint-config?style=flat-square

[size-image]: https://img.shields.io/github/languages/code-size/next-theme/eslint-config?style=flat-square
[dm-image]: https://img.shields.io/npm/dm/@next-theme/eslint-config?style=flat-square
[dt-image]: https://img.shields.io/npm/dt/@next-theme/eslint-config?style=flat-square

[npm-url]: https://www.npmjs.com/package/@next-theme/eslint-config
