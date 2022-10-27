const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Firefox Ecosystem Platform',
  tagline: 'Documentation for Firefox Accounts, Sync and more',
  url: 'https://mozilla.github.io',
  baseUrl: '/ecosystem-platform/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/firefox-logo.png',
  organizationName: 'mozilla',
  projectName: 'ecosystem-platform',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mozilla/ecosystem-platform/edit/master/',
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      ({
        specs: [
          {
            // Comes from https://api.accounts.firefox.com/swagger.json .  We're not using the URL here due to CORS errors, but also it is pulled in on build time so we'd need to rebuild periodically anyway
            spec: 'api-swagger.json',
            route: '/api',
          },
        ],
        option: {
          sortTagsAlphabetically: true,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Firefox Ecosystem Platform',
        logo: {
          alt: 'Ecosystem Platform Logo',
          src: 'img/firefox-logo.png',
        },
        items: [
          {
            href: "https://github.com/mozilla/ecosystem-platform",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Mozilla Corporation.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'RFM5H13DFK',
        apiKey: '8751d831ab7e8c4439d8eff5b100490c',
        indexName: 'firefox-ecosystem-framework',
      },
    }),
});
