'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  if (process.env.NODE_ENV === "development") {
    // run webpack with hot module replacement in development
    const development = require('../../../react/middleware');
    development(app)
  }

  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
