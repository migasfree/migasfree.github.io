import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: 'Presentaciones',
    link: '/presentaciones/',
    icon: 'fab fa-slideshare',
    activeMatch: '^/presentaciones/$',
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
      { text: 'Vitalinux (Educación)', link: '/casos-de-exito/vitalinux.md' },
      {
        text: 'Ayto. Zaragoza (Adm. Pública)',
        link: '/casos-de-exito/zaragoza.md',
      },
      { text: 'Ayto. Pasaia (Adm. Local)', link: '/casos-de-exito/pasaia.md' },
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
    ],
  },
  {
    text: 'ROI',
    link: '/calculadora-roi.md',
    icon: 'calculator',
  },
  {
    text: 'Glosario',
    link: '/glosario.md',
    icon: 'spell-check',
  },
  {
    text: 'Quiénes somos',
    link: '/team',
    icon: 'people-group',
    activeMatch: '^/team$',
  },
])
