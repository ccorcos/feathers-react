'use strict';

const app = require('./app');
const port = app.get('port');

// app.use('/', serveStatic( app.get('public') ))
const server = app.listen(port);

server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);