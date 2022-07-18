// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/* eslint-disable */
const { webpackPlugin } = require('./src/plugins');
const { ProvidePlugin } = require('webpack');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  title: 'Immutable X Documentation',
  tagline:
    'Experience zero gas fees, instant trades, and carbon neutral NFTs for marketplaces, games, and applications without compromise. Build your NFT business in hours with our APIs.',
  url: 'https://docs.immutable.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'immutable', // Usually your GitHub org/user name.
  projectName: 'imx-docs', // Usually your repo name.

  plugins: [
    () => ({
      name: 'custom-webpack-config',
      configureWebpack(config) {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve('process/browser'),
            }),
          ],
          resolve: {
            fallback: {
              stream: require.resolve('stream-browserify'),
              path: require.resolve('path-browserify'),
              buffer: require.resolve('buffer/'),
              url: require.resolve('url/'),
            },
          },
        };
      },
    }),
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/immutable/imx-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
        gtag: {
          trackingID: 'G-4JBHZ7F06X',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Immutable Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'doc',
            docId: 'overview/welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/reference',
            position: 'left',
            label: 'APIs',
          },
          {
            position: 'left',
            label: 'SDKs',
            type: 'doc',
            docId: 'sdks/index',
          },
          {
            to: 'https://support.immutable.com/hc/en-us/articles/4405227590799-Immutable-X-Whitepaper',
            label: 'IMX Whitepaper',
            position: 'left',
            className: 'custom_sidebar_menu',
          },
          {
            to: 'https://support.immutable.com/hc/en-us/articles/4404531555855-Immutable-X-Token',
            label: 'IMX Tokenomics',
            position: 'left',
            className: 'custom_sidebar_menu',
          },
          {
            to: 'https://immutascan.io/',
            label: 'Immutascan.io',
            position: 'left',
            className: 'custom_sidebar_menu',
          },
          {
            to: 'https://www.immutable.com/careers',
            label: 'Careers at immutable',
            position: 'left',
            className: 'custom_sidebar_menu',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      algolia: {
        appId: '2KKA2HFUSD',
        apiKey: '2cb7547e9bf1ee7ee1b033acb6387c1d', // Public API key: it is safe to commit it
        indexName: 'prod_imxdocs',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
