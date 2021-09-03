## Webdriver.io Workshop

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

#### To run the project

```bash
npx wdio run wdio.conf.js
```

### Set another environment

```bash
env NODE_ENV=${environment} npx wdio run wdio.conf.js
```

where:

- `${environment}` could be:  production

#### Read this as reference

- https://webdriver.io/docs/gettingstarted

#### Notes

This project uses [Thymeleaf Workshop](https://github.com/josdem/thymeleaf-workshop) as a target website product
