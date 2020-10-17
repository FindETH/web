import { resolve } from 'path';
import { GatsbyConfig } from 'gatsby';

const SITE_URL = 'https://beta.findeth.io';
const ENABLE_BUNDLE_ANALYZER = process.env.ANALYZE_BUNDLE ?? false;

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: SITE_URL
  },
  plugins: [
    'gatsby-plugin-typescript',
    // 'gatsby-plugin-typescript-checker',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-remove-dependency-transpilation',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        disable: !ENABLE_BUNDLE_ANALYZER,
        analyzerPort: 8001
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'FindETH',
        short_name: 'FindETH',
        description: 'FindETH is a tool to help you find your lost Ether, tokens or Ethereum address',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#242429',
        display: 'standalone',
        icon: resolve(__dirname, '../src/assets/images/logos/findeth.svg'),
        legacy: false,
        cache_busting_mode: 'none',
        crossOrigin: 'use-credentials'
      }
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: ['/flow/*', '/search/*']
      }
    },
    {
      resolve: 'gatsby-plugin-react-redux',
      options: {
        pathToCreateStoreModule: resolve(__dirname, '../src/store/store.ts')
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        fileName: false,
        pure: true
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('../src/App.tsx')
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: SITE_URL
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'beta.findeth.io',
        protocol: 'https',
        hostname: 'beta.findeth.io',
        generateMatchPathRewrites: false
      }
    }
  ]
};

export default config;
