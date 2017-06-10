const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputPath = path.join(__dirname, 'dist');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
  entry: './src/index.jsx',
  output: {
    path: outputPath,
    filename: 'dist/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },

    ],
  },
  plugins: [HtmlWebpackPluginConfig,
    new ExtractTextPlugin('dist/bundle.css'),
  ],
};
