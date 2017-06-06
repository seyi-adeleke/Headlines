const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = process.env.PORT || 3000;
const outputPath = path.join(__dirname, 'dist');
const Dotenv = require('dotenv-webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: outputPath,
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }

    ]
  },
  devServer: {
    port
  },
  plugins: [HtmlWebpackPluginConfig,
    new ExtractTextPlugin('dist/bundle.css')
  ]
};

