// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Greenshirt University',
  tagline: 'AMDO | LDO | CWO Maintenance Leadership',
  favicon: 'img/favicon.ico',

  url: 'https://amdo-community.github.io',
  baseUrl: '/greenshirt-university/',

  organizationName: 'AMDO-Community',
  projectName: 'greenshirt-university',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'GSU',
      items: [
        { to: '/welcome', label: 'Welcome', position: 'left' },
        { to: '/fundamentals', label: 'Fundamentals', position: 'left' },
        { to: '/watchstations', label: 'Watchstations', position: 'left' },
        { to: '/oral-board', label: 'Oral board', position: 'left' },
      ],
    },
  },
};

module.exports = config;
