const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: commonConfig.output.path,
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 6060,
  },
  mode: 'development',
  plugins: [new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  })],
});
