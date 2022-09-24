const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YouTube™ Dual Caption',
  // tagline: 'Dinosaurs are cool',
  url: 'https://www.dual-subtitles.com',
  baseUrl: '/Dual-Caption-Blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ouweiya',
  projectName: 'Dual-Caption-Blog',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans', 'zh-Hant'/* , 'id', 'de', 'es', 'fr', 'pt', 'ru', 'ja', 'ko', 'tr', 'vi', 'ar', 'th', 'uk', 'hu', 'fil' */],
    localeConfigs: {
      en: {
        label: 'English',
        path: 'en',
      },
      'zh-Hans': {
        label: '中文简体',
        path: 'zh-Hans',
      },
      'zh-Hant': {
        label: '中文繁體',
        path: 'zh-Hant',
      },
      id: {
        label: 'Bahasa Indonesia',
        path: 'id',
      },
      de: {
        label: 'Deutsch',
        path: 'de',
      },
      es: {
        label: 'Español',
        path: 'es',
      },
      fr: {
        label: 'Français',
        path: 'fr',
      },
      pt: {
        label: 'Português',
        path: 'pt',
      },
      ru: {
        label: 'Русский',
        path: 'ru',
      },
      ja: {
        label: '日本語',
        path: 'ja',
      },
      ko: {
        label: '한국어',
        path: 'ko',
      },
      tr: {
        label: 'Türk',
        path: 'tr',
      },
      vi: {
        label: 'Tiếng Việt',
        path: 'vi',
      },
      ar: {
        label: 'عربي',
        path: 'ar',
        direction: 'rtl',
      },
      th: {
        label: 'ไทย',
        path: 'th',
      },
      uk: {
        label: 'український',
        path: 'uk',
      },
      hu: {
        label: 'Magyar',
        path: 'hu',
      },
      fil: {
        label: 'Filipino',
        path: 'fil',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: false,
          postsPerPage: 'ALL',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        // title: 'My wew',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logoDark.svg',

          className: 'logoImg',
          // height: 26,
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
