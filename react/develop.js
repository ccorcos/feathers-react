'use strict';

const app = require('../feathers/src/app');
const config = require('./webpack.config');
const path = require('path');
const webpack = require('webpack');

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: '/static/',
  stats: {colors: true},
  // noInfo: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.get('/static/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/src/index.html'));
// });

const port = app.get('port');
const server = app.listen(port);
server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);
