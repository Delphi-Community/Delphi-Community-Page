const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Delphi Community',
  tagline: 'A independent open source community',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Delphi-Community', // Usually your GitHub org/user name.
  projectName: 'Delphi-Community-Page', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Delphi Community',
      logo: {
        alt: 'Delphi Community Logo',
        src: 'img/delphicommunity.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/docs/install-the-ide/introduction#download', label: 'Download', position: 'right'},
        {to: 'https://discord.com/invite/c382VBk', label: 'Discord', position: 'right'},
        /*{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Delphi-Community/Delphi-Community-Page',
          label: 'Discord',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/c382VBk',
            },
          ],
        },
        {
          title: 'More',
          items: [
            /*{
              label: 'Blog',
              to: '/blog',
            },*/
            {
              label: 'GitHub',
              href: 'https://github.com/dtpfl/Delphi-Community-Page',
            },
            {
              label: 'FreePascal',
              href: 'https://www.freepascal.org/',
            },
            {
              label: 'Lazarus IDE',
              href: 'https://www.lazarus-ide.org/',
            },
            {
              label: 'Embarcadero Delphi',
              href: 'https://www.embarcadero.com/products/delphi',
            },
          ],
        },
      ],
      copyright: `Delphi Community is not affiliated with or endorsed by Embarcadero, Idera, 
      Lazarus or other rightsholders. <br>
      Any trademarks used belong to their respective owners. <br>
      Copyright © ${new Date().getFullYear()} Delphi Community, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['pascal','git'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dtpfl/Delphi-Community-Page/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dtpfl/Delphi-Community-Page/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        //language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};
