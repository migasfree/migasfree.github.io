import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: 'Presentaciones',
    link: '/presentaciones/',
    icon: 'fab fa-slideshare',
    activeMatch: '^/presentaciones/$',
  },
  {
    text: 'Conceptos',
    icon: 'lightbulb',
    prefix: '/',
    children: [
      {
        text: 'Evolución Orgánica',
        link: 'conceptos/evolucion-organica.md',
        icon: 'dna',
      },
      {
        text: 'En tu organización',
        link: 'conceptos/migasfree-en-tu-organizacion.md',
        icon: 'building',
      },
      { text: 'Glosario', link: 'conceptos/glosario.md', icon: 'spell-check' },
    ],
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
    text: 'Casos de éxito',
    icon: 'star',
    activeMatch: '^/casos-de-exito/',
    children: [
      {
        text: 'La magia de Vitalinux (Educación)',
        link: '/casos-de-exito/vitalinux.md',
      },
      {
        text: 'Ayto. Zaragoza: 20 años en la brecha (Adm. Pública)',
        link: '/casos-de-exito/zaragoza.md',
      },
      {
        text: 'Ayto. Pasaia: el valor de la determinación (Adm. Pública)',
        link: '/casos-de-exito/pasaia.md',
      },
    ],
  },
  {
    text: 'Comparativas',
    icon: 'code-compare',
    activeMatch: '^/comparativas/',
    children: [
      { text: 'Vs Ansible', link: '/comparativas/ansible' },
      { text: 'Vs Microsoft', link: '/comparativas/microsoft' },
      { text: 'Vs Landscape', link: '/comparativas/landscape' },
    ],
  },
  {
    text: 'Herramientas',
    icon: 'wrench',
    children: [
      { text: 'Gestión Windows (WPT)', link: '/herramientas/windows.md' },
      {
        text: 'Calculadora ROI',
        link: '/herramientas/calculadora-roi.md',
        icon: 'calculator',
      },
    ],
  },

  {
    text: 'Quiénes somos',
    link: '/team',
    icon: 'people-group',
    activeMatch: '^/team$',
  },
])
