const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Freshwater',
      template: './src/template.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      //   {
      //     test: /\.css$/i,
      //     use: ['style-loader', 'css-loader'],
      //   },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /images\/\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      //   {
      //     test: /\.html/,
      //     type: 'asset/resource',
      //     generator: {
      //       filename: 'static/[hash][ext][query]',
      //     },
      //   },
    ],
  },
};
