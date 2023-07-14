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
        },
        {
            id: 'PCHQypVGHxY',
            text: 'Administrando tu parque de ordenadores Linux con migasfree',
            date: '2014-11-12',
            link: 'https://speakerdeck.com/jact/administrando-tu-parque-de-ordenadores-linux-con-migasfree',
        },
        {
            id: 'Mfb71BnqomE',
            text: '¿Es migasfree para mí?',
            date: '2015-05-05',
            link: 'https://speakerdeck.com/jact/es-migasfree-para-mi',
        },
        {
            id: 'PeExQxYZzWM',
            text: 'migasfree eXPeriences',
            date: '2018-03-30',
            link: 'https://speakerdeck.com/jact/migasfree-experiences-1',
        },
        {
            id: 'zej0sD0eeUQ',
            text: 'Jugando con la API de migasfree',
            date: '2020-04-01',
            link: 'https://speakerdeck.com/jact/jugando-con-la-api-de-migasfree',
        },
        {
            id: '3C4axcxuLXg',
            text: 'Migasfree Frontend',
            date: '2022-05-19',
            link: 'https://speakerdeck.com/jact/migasfree-frontend',
        },
        {
            id: 'v35cWLoEKII',
            text: 'Migasfree Client 5',
            date: '2022-05-19',
            link: 'https://speakerdeck.com/jact/migasfree-client-5',
        },
        {
            id: 'uon6ScXdbPM',
            text: 'Migasfree Play 5',
            date: '2022-05-19',
            link: 'https://speakerdeck.com/jact/migasfree-play-5',
        },
    ]
</script>

<div class="card center" v-for="item in videos">
  <YouTube :id='item.id' />
  <p class="card-caption">{{item.text}} ({{item.date}})</p>
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

.card-action {
    margin-top: 0;
}
</style>
