import { Configuration, ProgressPlugin } from 'webpack';
import { smart } from 'webpack-merge';
import common from './common';

const production: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'initial'
    }
  },
  plugins: [new ProgressPlugin()]
};

export default smart(common, production);
