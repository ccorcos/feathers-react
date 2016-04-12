import React from 'react'
import ReactDOM from 'react-dom'
import App from 'app'

const start = (Component) =>
  ReactDOM.render(<Component/>, document.getElementById('root'))

start(App)

if (module.hot) {
  // accept update of dependency
  module.hot.accept('app', function() {
    start(require('./app').default)
  })
}
