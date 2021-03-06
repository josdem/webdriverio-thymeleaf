## Webdriver.io Thymeleaf

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a workshop to show features around [Webdriver.io](https://webdriver.io/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version: `16.8.0`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To format the project

```bash
npx prettier --write .
```

#### To run the project locally

```bash
npx wdio run test/config/wdio.local.conf.js
```

### Set another environment

```bash
env NODE_ENV=${environment} npx wdio run wdio.conf.js
```

where:

- `${environment}` could be: production

#### To run the project in [SauceLabs](https://saucelabs.com/)

```bash
export SAUCE_USERNAME=${YOUR_SAUCE_USERNAME}
export SAUCE_ACCESS_KEY=${YOUR_SAUCE_KEY}
```

And

```bash
env NODE_ENV=${environment} npx wdio run test/config/wdio.${target}.conf.js
```

where:

- `${environment}` could be: production
- `${target}` could be:
  - local
  - android
  - iphone
  - browser

#### To run a single test

```bash
npx wdio run test/config/wdio.local.conf.js --spec=test/specs/${test}.spec.js
```

where:

`${test}` is the test spec name you want to run

#### Read this as reference

- https://webdriver.io/docs/gettingstarted

#### Notes

This project uses [Thymeleaf Workshop](https://github.com/josdem/thymeleaf-workshop) as a target website product
