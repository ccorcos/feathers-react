var webpack = require("webpack")

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'src/index.js'
  ],
  output: {
    path: '/',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}
