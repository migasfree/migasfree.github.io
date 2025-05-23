import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'

export default hopeTheme({
  hostname: 'http://migasfree.org',

  author: {
    name: 'Migasfree',
    // url: 'https://speakerdeck.com/jact/',
  },

  editLink: false,
  lastUpdated: false,
  contributors: false,

  logo: '/migasfree.svg',

  repo: 'migasfree/',
  repoLabel: 'GitHub',

  docsDir: 'src',

  // navbar
  navbar,
  navbarLayout: {
    start: ['Brand'],
    center: ['Links'],
    end: ['Repo', 'TwitterLink', 'Outlook', 'Search'],
  },

  // sidebar
  sidebar,
  sidebarSorter: ['readme', 'order', 'date-desc', 'filename'],

  footer: '© 2010-hoy migasfree team',
  copyright: false,

  displayFooter: true,

  /*encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },*/

  metaLocales: {
    editLink: 'Editar esta página en GitHub',
  },

  blog: {
    medias: {
      GitHub: 'https://github.com/migasfree',
      Twitter: 'https://twitter.com/migasfree',
    },
    //sidebarDisplay: 'always',
  },

  // All features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    // chartjs: true,
    codeTabs: true,
    demo: true,
    // echarts: true,
    figure: true,
    // flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    // mermaid: true,
    playground: {
      presets: ['ts', 'vue'],
    },
    revealjs: true,
    stylize: [
      {
        matcher: 'Recommended',
        replacer: ({ tag }) => {
          if (tag === 'em')
            return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommended',
            }
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
    vuePlayground: true,
  },

  plugins: {
    // You should generate and use your own comment service
    /*comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },*/

    search: {
      isSearchable: (page) => page.path !== '/',
      maxSuggestions: 10,
      getExtraFields: () => [],
      locales: {
        '/': {
          placeholder: 'Buscar',
        },
      },
    },

    icon: {
      assets: 'fontawesome-with-brands',
    },

    blog: {
      excerptLength: 0,
      article: '/blog/',
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('blog/') : false,
      type: [
        {
          key: 'post',
          filter: ({ filePathRelative, frontmatter }) => {
            if (!filePathRelative) return false

            if (!filePathRelative.includes('/blog/')) return false

            if (
              frontmatter.home ||
              frontmatter.layout ||
              frontmatter.timeline === false
            )
              return false

            return true
          },
        },
      ],
    },

    components: {
      components: [
        'Badge',
        'BiliBili',
        'PDF',
        'SiteInfo',
        'VidStack',
        'VPCard',
      ],
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    redirect: {
      config: {
        '/vitalinux': '/blog/2025/vitalinux.html',
        '/vitalinux/': '/blog/2025/vitalinux.html',
      },
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
})
