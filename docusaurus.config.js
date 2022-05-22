// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Immutable X Documentation',
  tagline:
    'Experience zero gas fees, instant trades, and carbon neutral NFTs for marketplaces, games, and applications without compromise. Build your NFT business in hours with our APIs.',
  url: 'https://docs.immutable.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'immutable', // Usually your GitHub org/user name.
  projectName: 'imx-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
          src: 'img/logo-light.jpg',
          srcDark: 'img/logo-dark.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/welcome',
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
            position: 'left',
            label: 'Guides',
            type: 'doc',
            docId: 'guides/getting-started-guide',
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
        indexName: 'dev_imxdocs',
      },
    }),
}

module.exports = config
