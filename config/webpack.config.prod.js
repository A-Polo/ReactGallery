const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  })],
});
