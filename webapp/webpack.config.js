var webpack = require('webpack');
var path = require('path');
require('es6-promise').polyfill();
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');
var env = process.env.WEBPACK_ENV;

var appName = 'bundle';
var plugins = [];

if (env === 'build') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress:{
      warnings: true
    }
  }));
  plugins.push(new webpack.DefinePlugin({
    "process.env": {
       NODE_ENV: JSON.stringify("production")
     }
  }));
}
plugins.push(new ExtractTextPlugin('app.css'));
plugins.push(new webpack.ProvidePlugin({
               $: "jquery",
               jQuery: "jquery"
             }));

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    preLoaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'jshint-loader'
        }
    ],
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: plugins,
};

module.exports = config;
