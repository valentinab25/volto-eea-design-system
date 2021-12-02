/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'EEA Design System',
  tagline: 'EEA Design System package',
  url: 'https://eea.github.io/',
  baseUrl: '/eea-design-system/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eea', // Usually your GitHub org/user name.
  projectName: 'volto-eea-design-system', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'EEA Design System',
      logo: {
        alt: 'EEA Design System Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'EEA Component Library',
        },
        {
          href: 'https://github.com/eea/volto-eea-design-system',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/eea/volto-eea-design-system',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EEA. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/eea/volto-eea-design-system/edit/develop/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/develop/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};