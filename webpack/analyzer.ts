import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { smart } from 'webpack-merge';
import production from './production';

const analyzer: Configuration = {
  plugins: [new BundleAnalyzerPlugin()]
};

export default smart(production, analyzer);
