<p align="center">
  <img alt="mjml-utils" src="https://image.flaticon.com/icons/png/512/672/672739.png" width="100">
</p>

<h3 align="center">
  clear
</h3>

<p align="center">
  A translucent Node.js server starter-kit
  <br>
  <a href="https://expressjs.com/" target="_blank">Express</a> + <a href="https://babeljs.io/" target="_blank">Babel</a> + <a href="https://prettier.io/" target="_blank">Prettier</a> + <a href="https://eslint.org/" target="_blank">ESLint</a> + <a href="https://facebook.github.io/jest/" target="_blank">Jest</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/release/justinsisley/clear.svg?style=for-the-badge" alt="GitHub release" /> <a href="https://travis-ci.org/justinsisley/clear"><img src="https://img.shields.io/travis/justinsisley/clear.svg?style=for-the-badge" alt="Travis" /></a> <img src="https://img.shields.io/github/license/justinsisley/clear.svg?style=for-the-badge" alt="license" />
</p>

---

[Changelog](https://github.com/justinsisley/clear/releases)

---

# Features

- __Use a familiar Node.js HTTP server library__ _(via Express)_
- __Use the latest and greatest ECMAScript__ _(via Babel)_
- __Keep code clean and consistent__ _(via Prettier and ESLint)_
- __Provide a fast development workflow__ _(via nodemon)_
- __Write tests with ease__ _(via Jest)_

# Documentation

## Install

Clone the repo via git:

```bash
git clone --depth=1 https://github.com/justinsisley/clear.git your-project-name
```

Initialize your own git repository:

```bash
$ cd your-project-name
$ rm -rf .git && git init
```

Install dependencies:

```bash
$ npm i
```

## Develop

Run the server in development mode:

```bash
npm run dev
```

> __Note__: In development mode, the server will restart any time your code is changed.

## Test

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

> __Note__: Any file in the `src` directory that ends in `.test.js` will be found by Jest.

## Build

Create a static build:

```bash
npm run build
```

> __Note:__ This script will use Babel to compile code within the `src` directory into a `dist` directory.

## Production

Run the server in production mode:

```bash
npm start
```

> __Note:__ This script requires a build via `npm run build`.

## Pre-commit Hook

This starter-kit is pre-configured with a [git pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks), which will automatically clean up your staged code using Prettier and ESLint. This is done using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).

You can modify the pre-commit workflow in the `.lintstagedrc` file.

# Credits
<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
