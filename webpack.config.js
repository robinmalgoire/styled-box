const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(ROOT_PATH, 'src/index.html'),
      filename: "index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  },
  output: {
    publicPath: '/'
  }
};