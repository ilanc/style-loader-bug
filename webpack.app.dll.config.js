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
  entry: './src/app.js',
  output: {
      path: 'build/',
      filename: "app.js"
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: ".",
      manifest: require("./build/dll1-manifest.json")
    })
  ]
};
