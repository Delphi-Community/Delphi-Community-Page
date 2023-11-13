const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;


export default {
  title: 'Delphi Community',
  tagline: 'A independent open source community',
  url: 'https://delphi-community.com',
  favicon: 'img/favicon.ico',
  baseUrl: '/',
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
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
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],
  
  themeConfig: {
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: ['pascal','git'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: 'Delphi Community',
      logo: {
        alt: 'Delphi Community Logo',
        src: 'img/ModifiedLogo.png',
        // src: 'img/logo2022.png',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Documentation',
        // },
        {to: 'https://www.paypal.com/donate/?hosted_button_id=7JZWSL39B5JA6', label: 'Donate', position: 'right'},
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
              href: 'https://github.com/Delphi-Community/Delphi-Community-Page',
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
      Copyright © ${new Date().getFullYear()} Delphi Community`,
    },
    
  },
};
