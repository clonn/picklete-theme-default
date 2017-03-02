const path = require('path');
const webpack = require('webpack');

const clientDir = path.resolve('./');
const rootDir = path.resolve('../');
const config = require(`${rootDir}/config/env/production`);

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
       loader: ExtractTextPlugin.extract('css-loader!resolve-url-loader')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!resolve-url-loader!sass-loader?sourceMap')
    }, {
      test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1024&name=[sha512:hash:base64:7].[ext]'
    },{
      test: /\.(json|JSON)$/,
      loader: 'file?name=[sha512:hash:base64:7].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),

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

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),

    // 產生 bundle 中各模組大小組成與分佈的報表
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   reportFilename: 'report.html',
    //   openAnalyzer: true
    // })
  ]
};
