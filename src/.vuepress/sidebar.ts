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
      text: 'Conceptos',
      icon: 'lightbulb',
      prefix: 'conceptos/',
      children: [
        { text: 'Evolución Orgánica', link: 'evolucion-organica.md', icon: 'dna' },
        { text: 'En tu organización', link: 'migasfree-en-tu-organizacion.md', icon: 'building' },
        { text: 'Glosario', link: 'glosario.md', icon: 'spell-check' },
      ],
    },
    {
      text: 'Casos de éxito',
      icon: 'star',
      prefix: 'casos-de-exito/',
      children: 'structure',
    },
    {
      text: 'Comparativas',
      icon: 'code-compare',
      prefix: 'comparativas/',
      children: 'structure',
    },
    {
      text: 'Herramientas',
      icon: 'wrench',
      prefix: 'herramientas/',
      children: 'structure',
    },


    {
      link: '/presentaciones/',
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

  '/casos-de-exito/': [
    {
      text: 'Casos de éxito',
      icon: 'star',
      prefix: '/casos-de-exito/',
      children: 'structure',
    },
    blogRoll,
  ],

  '/comparativas/': [
    {
      text: 'Comparativas',
      icon: 'code-compare',
      prefix: '/comparativas/',
      children: 'structure',
    },
  ],

  '/herramientas/': [
    {
      text: 'Herramientas',
      icon: 'wrench',
      prefix: '/herramientas/',
      children: 'structure',
    },
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

  '/presentaciones/': [
    {
      link: '/',
      text: 'Inicio',
      icon: 'home',
    },
    {
      link: '/presentaciones/',
      text: 'Presentaciones',
      icon: 'fab fa-slideshare',
      children: 'structure',
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
})
