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
  entry: './src/app.style.js',
  output: {
      path: 'build/',
      filename: "app.style.js"
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};
