import ForkCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from 'webpack';
import { smart } from 'webpack-merge';
import common from './common';

const development: Configuration = {
  mode: 'development',
  output: {
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true,
    https: true,
    hot: true,
    port: 8000
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new ForkCheckerWebpackPlugin()]
};

export default smart(common, development);
