"use strict";

// Generated using webpack-cli https://github.com/webpack/webpack-cli
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var WorkboxWebpackPlugin = require('workbox-webpack-plugin');

var webpack = require('webpack');

var lodash = require('lodash');

var isProduction = process.env.NODE_ENV == 'production';
var isDevelopment = process.env.NODE_ENV == 'development';
var stylesHandler = 'style-loader';
var config = {
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    // open: true,
    host: 'localhost'
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  }), new webpack.DefinePlugin({
    __DEV__: isDevelopment,
    __PROD__: isProduction,
    __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
    __PREFIX__: JSON.stringify('ss-')
  }) // Add your plugins here
  // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [{
      test: /\.(ts|tsx)$/i,
      use: ['ts-loader'],
      exclude: ['/node_modules/']
    }, {
      test: /\.s[ac]ss$/i,
      use: [stylesHandler, 'css-loader', 'postcss-loader', {
        loader: 'sass-loader',
        options: {
          additionalData: '@import "src/styles/base.scss";'
        }
      } // {
      //   loader: 'sass-resources-loader',
      //   options: {
      //     resources: [
      //       path.resolve(__dirname, 'path/to/your/variables.scss'),
      //     ],
      //   },
      // },
      ]
    }, {
      test: /\.css$/i,
      use: [stylesHandler, 'css-loader', 'postcss-loader']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      type: 'asset'
    } // Add your rules for custom modules here
    // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
      '@': path.resolve(__dirname, 'src/')
    }
  }
};

module.exports = function () {
  if (isProduction) {
    config.mode = 'production';
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
  }

  return config;
};