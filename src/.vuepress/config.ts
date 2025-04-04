import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { abbr } from '@mdit/plugin-abbr'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  lang: 'es-ES',
  title: 'Migasfree',
  description: 'Sistema de gestión de sistemas',

  theme,

  head: [
    //...

    // Import the corresponding link
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Abel:wght@400;500;700&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Cambay:wght@400;500;700&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],

  extendsMarkdown: (md) => {
    md.use(abbr)
  },

  // Enable it with pwa
  // shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
