import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';
import { Configuration, EnvironmentPlugin } from 'webpack';

export const ROOT_PATH = resolve(__dirname, '..');
export const SOURCE_PATH = resolve(__dirname, '../src');

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';

const common: Configuration = {
  entry: resolve(SOURCE_PATH, 'index.tsx'),
  output: {
    path: resolve(ROOT_PATH, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: [SOURCE_PATH]
      },
      {
        test: /\.(woff|woff2|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'assets'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: IS_DEVELOPMENT
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(SOURCE_PATH, 'index.html')
    }),
    new EnvironmentPlugin({
      IS_LOCAL: false
    }),
    new MiniCssExtractPlugin({
      filename: IS_DEVELOPMENT ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: IS_DEVELOPMENT ? '[id].css' : '[id].[contenthash].css'
    })
  ]
};

export default common;
