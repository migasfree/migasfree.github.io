import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    {
      link: '/',
      text: 'Inicio',
      icon: 'home',
    },
    {
      link: '/presentaciones',
      text: 'Presentaciones',
      icon: 'fab fa-slideshare',
    },
    {
      link: '/blog',
      text: 'Blog',
      icon: 'blog',
    },
    {
      link: '/team',
      text: 'Quiénes somos',
      icon: 'people-group',
    },
    {
      text: 'Blogroll',
      children: [
        {
          link: 'http://zaragozaciudad.net/azlinux/',
          text: 'AZLinux',
        },
        {
          link: 'http://wiki.vitalinux.educa.aragon.es/',
          text: 'Vitalinux Edu DGA',
        },
      ],
    },
  ],
  '/blog/': [
    {
      link: '/blog',
      text: 'Blog',
      icon: 'blog',
      children: 'structure',
    },
  ],
})
