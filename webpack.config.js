const webpack = require('webpack');
// local
const path = require('path');
// plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


// configuração do ambiente trabalho
require('dotenv').config();
// se for modo dev
const DEV = process.env.NODE_ENV !== 'production';
// settings
const dist = DEV ? 'dev' : 'build';
const settings = {
  entry: {
    main: './cliente/app.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    cssFilename: '[name].css',
    cssChunkFilename: '[name].[contenthash].css',
    client: `${dist}/cliente`,
    html: './cliente/index.html'
  }
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, settings.entry.main),
  devtool: DEV ? 'source-map' : '',
  stats: 'verbose',
  output: {
    filename: settings.output.filename,
    path: path.join(__dirname, settings.output.client)
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, settings.output.html),
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
        html5: true
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: settings.output.cssFilename,
      chunkFilename: settings.output.cssChunkFilename
    }),
    new CopyPlugin([{
      from: 'cliente/favicon.ico',
      to: 'favicon.ico'
    }])
  ],
  devServer: {
    contentBase: path.join(__dirname, settings.output.client),
    port: process.env.CLIENT_PORT,
    open: true,
    compress: true,
    // skip CSP browser errors
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css']
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    // set the rules of transpiling
    rules: [
      {
        // transpile es6 in all the .js or .jsx files
        test: /\.js|jsx$/,
        // don't transpile code in the node modules folder
        exclude: /node_modules/,
        use: {
          // use the babel loader with cache for performance improvements
          // cache improves the performance by 2 according to the docs
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
