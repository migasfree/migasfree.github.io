import { sidebar } from 'vuepress-theme-hope'

const blogRoll = {
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
}

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
      link: '/blog/',
      text: 'Blog',
      icon: 'blog',
    },
    {
      link: '/team',
      text: 'Quiénes somos',
      icon: 'people-group',
    },
    blogRoll,
  ],
  '/blog/': [
    {
      link: '/blog/',
      text: 'Blog',
      icon: 'blog',
      children: 'structure',
    },
    blogRoll,
  ],
})
