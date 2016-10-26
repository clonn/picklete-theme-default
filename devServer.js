const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./config/webpack.config.dev');
const app = express();
const compiler = webpack(webpackConfig);
const path = require('path');

// const config = require('../config.js');

app.use(`/dist`, express.static('dist'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: 'http://localhost:8000/dist/'
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.dev.html'));
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Clinet devServer is listening at http://localhost:8000`);
});
