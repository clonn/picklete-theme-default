const path = require('path');
const webpack = require('webpack');

const clientDir = path.resolve('./');
const rootDir = path.resolve('../');
const config = require(`${rootDir}/config/env/production`);

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './root/root.js'
  ],

  output: {
    path: path.join(clientDir, 'build'),
    filename: 'bundle.js',
    publicPath: config.domain + '/build/'
  },

  resolve: {
    root: [
      path.join(clientDir, ''),
      path.join(clientDir, 'entry')
    ],
    extensions: ['', '.js', '.jsx','css', '.scss'],
    alias: {
      '': [
        path.join(clientDir, ''),
        path.join(clientDir, 'entry')
      ]
    }
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'latest', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!resolve-url-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap'
    }, {
      test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1024&name=[sha512:hash:base64:7].[ext]'
    },{
      test: /\.(json|JSON)$/,
      loader: 'file?name=[sha512:hash:base64:7].[ext]'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'APP_DOMIAN': config.domain,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      mangle: {
        except: ['_']
      }
    }),

    new webpack.ProvidePlugin({
      _: 'lodash',
      moment: 'moment'
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)

  ]
};
