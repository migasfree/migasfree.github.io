import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: 'Presentaciones',
    link: '/presentaciones',
    icon: 'fab fa-slideshare',
    activeMatch: '^/presentaciones$',
  },
  {
    text: 'Blog',
    link: '/blog/',
    icon: 'blog',
    activeMatch: '^/blog/$',
  },
  {
    text: 'Documentación',
    link: 'http://fun-with-migasfree.readthedocs.org/',
    icon: 'book',
  },
  {
    text: 'Quiénes somos',
    link: '/team',
    icon: 'people-group',
    activeMatch: '^/team$',
  },
])
