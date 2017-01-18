const webpack = require("webpack");

module.exports = {
  target: 'web',
  debug: true,
  //devtool: 'inline-source-map',
  noInfo: false,

  resolve: {
      extensions: [
        "",
        ".js"
      ]
  },
  entry: {
      dll1: [
          './src/dll1.js'
      ]
  },
  output: {
      path: 'build/',
      publicPath: '/build/',
      filename: "dll1.js",
      library: "dll1"     
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'build/dll1-manifest.json',
      name: 'dll1'
    })
  ]
};
