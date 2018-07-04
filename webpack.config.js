const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(ROOT_PATH, 'src/components'),
      containers: path.resolve(ROOT_PATH, 'src/containers'),
      modules: path.resolve(ROOT_PATH, 'src/modules'),
      utils: path.resolve(ROOT_PATH, 'src/utils'),
    },
  },
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
      template: "./src/index.html",
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