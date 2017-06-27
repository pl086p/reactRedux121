var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: './src',    
    filename: 'bundle.js'
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    contentBase: './src',
    port: 3012,
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!postcss!stylus?paths=node_modules'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel',
        query: {
          //'presets': ['es2015', 'stage-2', 'react'],
          'presets': ['es2015', 'stage-2', 'react', 'react-hmre'],
          'plugins': ['react-hot-loader/babel']
        }
      }
    ]
  },

  postcss: function() {
    return [autoprefixer];
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

