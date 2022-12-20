const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Delphi Community',
  tagline: 'A independent open source community',
  url: 'https://delphi-community.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Delphi-Community', // Usually your GitHub org/user name.
  projectName: 'Delphi-Community-Page', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      title: 'Delphi Community',
      logo: {
        alt: 'Delphi Community Logo',
        src: 'img/Logo-OhneRand.png',
        // src: 'img/logo2022.png',
      },
      items: [
        /*{
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },*/
        /*{to: '/docs/install-the-ide/introduction#download', label: 'Download', position: 'right'},*/
        {to: 'https://discord.com/invite/c382VBk', label: 'Discord', position: 'right'},
        /*{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Delphi-Community/Delphi-Community-Page',
          label: 'Discord',
          position: 'right',
        },*/
        // {
        //   type: 'localeDropdown',
        //   position: 'left',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
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
              href: 'https://github.com/Delphi-CommunityDelphi-Community-Page',
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
          editUrl: 'https://github.com/Delphi-Community/Delphi-Community-Page/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Delphi-Community/Delphi-Community-Page/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de', 'pt'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-GB',
  //     },
  //     // You can omit a locale (e.g. fr) if you don't need to override the defaults
  //   },
  // },
  // plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};
