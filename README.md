# Feathers + Webpack

An example app using Feathers + Webpack.

## Getting Started

```sh
cd react
npm i
cd ../feathers/
npm i
NODE_ENV=development npm start
```

build and run without webpack

```sh
cd react
webpack -p --config webpack.config.js
cd ../feathers
npm start
```

## To Do

- deploy with now.sh

- webpack
  - build and minify html
  - caching policy with hash
  - multiple entry points

- how to separate webpack dependencies from feathers
- how to do common linting between projects

- code linting
- unit testing
- code coverage
- integration testing
- functional testing
- continuous integration

- external services
  - logging
  - error reporting
  - tracking
  - email
  - twilio
- deploy
  - multiple servers
  - scaling databases
  - migrating databases

- webpack inline image blur
- styleguide
- react storybook
- react native ios and android

## Getting Started

- read about [Feathers](http://docs.feathersjs.com/)
- read about [Webpack](https://webpack.github.io/docs)
- read about [React](https://facebook.github.io/react/docs)

```js
npm install -g webpack feathers-cli
cd react/
npm i
cd ../feathers/
npm i
npm start
open https://localhost:3030
```

## Features (Planned)

- Feathers
- Webpack
  - multiple entry points
  - eslint
- Babel
- React
- Karma
  - Mocha
  - Istanbul
  - Webdriver
- TravisCI / CircleCI
- Now.sh
- Logging
- Error Reporting
- Email / Twilio
- Admin Users
- A/B Testing
- Tracking
- React Native
