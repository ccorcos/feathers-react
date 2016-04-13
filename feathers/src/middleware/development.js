'use strict';

const platform = process.env.PLATFORM
const config = require(`../../../${platform}/webpack.config`);
const webpack = require('webpack');

module.exports = function(app) {

  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    // historyApiFallback: true,
    stats: {colors: true},
    // noInfo: true,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}