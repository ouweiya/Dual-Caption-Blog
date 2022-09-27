const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YouTube™ Dual Caption',
  // tagline: 'Dinosaurs are cool',
  url: 'https://www.dual-subtitles.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ouweiya',
  projectName: 'Dual-Caption-Blog',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'zh-Hans',
      'zh-Hant',
      'id',
      'de',
      'es',
      'fr',
      'pt',
      'ru',
      'ja',
      'ko',
      'tr',
      'vi',
      'ar',
      'th',
      'uk',
      'hu',
      'fil',
    ],
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
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://github.com/ouweiya/Dual-Caption-Blog" target="_blank" rel="noopener noreferrer" class="githubLink">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0.297119C5.37 0.297119 0 5.67012 0 12.2971C0 17.6001 3.438 22.0971 8.205 23.6821C8.805 23.7951 9.025 23.4241 9.025 23.1051C9.025 22.8201 9.015 22.0651 9.01 21.0651C5.672 21.7891 4.968 19.4551 4.968 19.4551C4.422 18.0701 3.633 17.7001 3.633 17.7001C2.546 16.9561 3.717 16.9711 3.717 16.9711C4.922 17.0551 5.555 18.2071 5.555 18.2071C6.625 20.0421 8.364 19.5121 9.05 19.2051C9.158 18.4291 9.467 17.9001 9.81 17.6001C7.145 17.3001 4.344 16.2681 4.344 11.6701C4.344 10.3601 4.809 9.29012 5.579 8.45012C5.444 8.14712 5.039 6.92712 5.684 5.27412C5.684 5.27412 6.689 4.95212 8.984 6.50412C9.944 6.23712 10.964 6.10512 11.984 6.09912C13.004 6.10512 14.024 6.23712 14.984 6.50412C17.264 4.95212 18.269 5.27412 18.269 5.27412C18.914 6.92712 18.509 8.14712 18.389 8.45012C19.154 9.29012 19.619 10.3601 19.619 11.6701C19.619 16.2801 16.814 17.2951 14.144 17.5901C14.564 17.9501 14.954 18.6861 14.954 19.8101C14.954 21.4161 14.939 22.7061 14.939 23.0961C14.939 23.4111 15.149 23.7861 15.764 23.6661C20.565 22.0921 24 17.5921 24 12.2971C24 5.67012 18.627 0.297119 12 0.297119" fill="currentcolor" />
              </svg>
            </a>`,
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
