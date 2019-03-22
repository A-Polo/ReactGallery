const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'styles/[name].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: {
    index: './src/root/index.jsx',
  },

  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, '../bundle'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, '../src/assets/styles/variables/*.scss'),
              path.resolve(__dirname, '../src/assets/styles/_resources.scss'),
            ],
          },
        }, 'postcss-loader',
        ],
      }),
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'The Blog Pet Project',
    filename: 'index.html',
    chunks: ['index'],
    template: './src/templates/index.html',
    inject: true,
  }),
  extractSass,
  ],
};
