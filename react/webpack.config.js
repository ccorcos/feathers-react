const webpack = require("webpack")

const config = {
  entry: 'src/index.js',
  output: {
    path: '../feathers/public',
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react', 
            'stage-0'
          ]
        }
      },
      {
        test: /\.(svg|png|jpe?g|gif|ttf|woff2?|eot)$/,
        loader: 'url?limit=8182'
      },
    ]
  },
  resolve: {
    root: [
      __dirname,
      __dirname + '/src',
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ]
}

if (process.env.NODE_ENV === "development") {
  config.entry = ['webpack-hot-middleware/client', config.entry]
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.output.path = '/'
  config.devtool = 'source-map'
}

module.exports = config