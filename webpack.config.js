const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '/src/index.js'),
  output : {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      { 
        test: /\.jsx?/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            exclude: [
              /node_modules/
            ],
          }
        }
      }
    ]
  }
}