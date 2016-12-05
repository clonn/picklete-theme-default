const path = require('path');
const webpack = require('webpack');

const clientDir = path.resolve('./');
const rootDir = path.resolve('../');
// const config = require(`${rootDir}/config`);

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    `webpack-hot-middleware/client?path=//localhost:8000/__webpack_hmr`,
    // `webpack-hot-middleware/client?noInfo=true&path=//localhost:8000/__webpack_hmr`,

    './root/root.js'
  ],

  output: {
    path: path.join(clientDir, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8000/dist/'
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
        presets: ['react', 'latest', 'stage-0', 'react-hmre']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?sourceMap!resolve-url-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?sourceMap!resolve-url-loader!sass-loader?sourceMap'
    }, {
      test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1024&name=[sha512:hash:base64:7].[ext]'
    },{
      test: /\.(json|JSON)$/,
      loader: 'file?name=[sha512:hash:base64:7].[ext]'
    }]
  },

  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
};
