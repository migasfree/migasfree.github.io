---
title: Presentaciones
timeline: false
feed: false
---

<script setup>
    const videos = [
        {
            id: 'x5o1Z00GIQM',
            text: 'Migasfree en la gestión de la configuración',
            date: '2012-01-12',
            link: 'https://speakerdeck.com/jact/migasfree-en-la-gestion-de-la-configuracion',
            abstract: 'Analiza la importancia de gestionar los cambios de software para garantizar la integridad del sistema, lo que es esencial para que las organizaciones mantengan sistemas estables. Los beneficios de este enfoque son la reducción de los costes de desarrollo y mantenimiento, el aumento de la estabilidad del sistema y la mejora de las prácticas de gestión de cambios.',
        },
        {
            id: 'PCHQypVGHxY',
            text: 'Administrando tu parque de ordenadores Linux con migasfree',
            date: '2014-11-12',
            link: 'https://speakerdeck.com/jact/administrando-tu-parque-de-ordenadores-linux-con-migasfree',
            abstract: 'Destaca los desafíos de administrar una red informática con diversos usuarios y necesidades, haciendo hincapié en la necesidad de soluciones controladas y replicables. Enfatiza la importancia de la integridad del sistema y el uso de empaquetado para garantizar configuraciones consistentes en toda la red.',
        },
        {
            id: 'Mfb71BnqomE',
            text: '¿Es migasfree para mí?',
            date: '2015-05-05',
            link: 'https://speakerdeck.com/jact/es-migasfree-para-mi',
            abstract: 'Explica que migasfree administra paquetes de software para varios clientes, incluidos PCs y servidores, distribuyéndolos dinámicamente en función de atributos y un cronograma predefinido. Destaca que migasfree ofrece un sistema flexible y adaptable para organizaciones de todos los tamaños.',
        },
        {
            id: 'PeExQxYZzWM',
            text: 'migasfree eXPeriences',
            date: '2018-03-30',
            link: 'https://speakerdeck.com/jact/migasfree-experiences-1',
            abstract: 'Detalla las experiencias y los cambios en el Ayuntamiento de Zaragoza, impulsados ​​por el proyecto migasfree. Este proyecto se ha convertido en un impulsor clave del cambio dentro del Ayuntamiento, lo que les permite gestionar mejor su panorama tecnológico, adaptarse a nuevos desafíos y, en última instancia, mejorar la eficiencia y la eficacia de sus operaciones.',
        },
        {
            id: 'zej0sD0eeUQ',
            text: 'Jugando con la API de migasfree',
            date: '2020-04-01',
            link: 'https://speakerdeck.com/jact/jugando-con-la-api-de-migasfree',
            abstract: 'Describe la evolución de las API dentro del proyecto migasfree. Enfatiza los beneficios de adoptar las API RESTful, incluida la seguridad mejorada, la documentación estandarizada y un ecosistema de aplicaciones más rico.',
        },
        {
            id: '3C4axcxuLXg',
            text: 'Migasfree Frontend',
            date: '2022-05-19',
            link: 'https://speakerdeck.com/jact/migasfree-frontend',
            abstract: 'Presenta una descripción general de la nueva interfaz de usuario para migasfree, versión 5. El documento destaca los cambios y características clave, centrándose en el cambio hacia una experiencia moderna y fácil de usar.',
        },
        {
            id: 'v35cWLoEKII',
            text: 'Migasfree Client 5',
            date: '2022-05-19',
            link: 'https://speakerdeck.com/jact/migasfree-client-5',
            abstract: 'Resume los principales cambios introducidos en la versión 5 del cliente de migasfree, específicamente su protocolo de comunicación mejorado, sistema de complementos y compatibilidad con Windows.',
        },
        {
            id: 'uon6ScXdbPM',
            text: 'Migasfree Play 5',
            date: '2022-05-19',
            link: 'https://speakerdeck.com/jact/migasfree-play-5',
            abstract: 'Describe el rediseño de la aplicación Migasfree Play, que se se centra en mejorar la experiencia del usuario, la funcionalidad y la capacidad de mantenimiento de la aplicación, lo que permite un desarrollo más rápido y una expansión futura.',
        },
    ]
</script>

<div class="card center" v-for="item in videos">
  <VidStack
    :src="`youtube/${item.id}`"
    :poster="`https://i.ytimg.com/vi_webp/${item.id}/maxresdefault.webp`"
    :title="item.text"
  />
  <p class="card-caption">{{item.text}} ({{item.date}})</p>
  <p class="card-body">{{item.abstract}}</p>
  <p class="card-action"><a :href="item.link">Descargar</a></p>
</div>

<style scoped>
.card {
    margin: 0.5em auto 2em;
    text-align: center;
}

.card-caption {
    font-size: 150%;
    margin-top: 0;
    margin-bottom: 0;
}

.card-body {
    text-align: left;
    margin: 0.5em auto;
}

.card-action {
    margin-top: 0;
}
</style>
