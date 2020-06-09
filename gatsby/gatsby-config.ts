import { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

const SITE_URL = 'https://beta.findeth.io';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: SITE_URL
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
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
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'beta.findeth.io',
        protocol: 'https',
        hostname: 'beta.findeth.io'
      }
    }
  ]
};

export default config;
