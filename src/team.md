---
title: Quiénes somos
timeline: false
---

<script setup>

const members = [
  {
    avatar: '/avatar/alberto.jpg',
    name: 'Alberto Gacías',
    title: 'Creador y desarrollador',
    text: 'Comencé a desarrollar migasfree para ahorrarme horas de trabajo. Actualmente uso migasfree a diario y lo que más me gusta de esta herramienta es el control que me proporciona a la hora producir cambios en los equipos que administramos.',
    links: [
      { icon: 'fab fa-twitter', link: 'http://twitter.com/albertogacias' }
    ]
  },
  {
    avatar: '/avatar/jact.png',
    name: 'Jose Antonio Chavarría',
    title: 'Desarrollador',
    text: 'Migasfree nos ayudó a avanzar enormemente y con paso seguro en el proyecto de migración a Linux del Ayuntamiento de Zaragoza. Sin esta herramienta, seguiríamos en la oscura edad de piedra.',
    links: [
      {icon: 'fab fa-twitter', link: 'http://twitter.com/jact_abcweb'},
      {icon: 'fab fa-linkedin', link: 'http://es.linkedin.com/in/jachavar'},
      {icon: 'fab fa-github', link: 'https://github.com/jact'},
      {icon: 'fab fa-slideshare', link: 'http://speakerdeck.com/jact'},
      {icon: 'fab fa-blogger', link: 'http://abcweb.blogspot.com/'},
    ]
  }
]
</script>

En migasfree nos gusta compartir y ayudarnos mútuamente. Es por esto que, si estás usando migasfree, puedes integrarte en nuestra comunidad de usuarios en Slack. Solicítanos una invitación por email.

<div class="card" v-for="item in members">
  <div class="card-heading">
    <p class="card-title">{{item.name}}</p>
    <p class="card-subtitle">{{item.title}}</p>
  </div>
  <div class="card-body">
    <p><img :src="item.avatar" /></p>
    <p class="quote">«{{item.text}}»</p>
  </div>
  <p class="card-links">
    <template v-for="el in item.links">
      <a :href="el.link"><FontIcon :icon="el.icon" color="#ff671a" :size="30" /></a>
    </template>
  </p>
</div>

<style scoped>
.card {
  text-align: center;
  margin: 0.5em auto 1em;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 8px;
}

.card-heading {
  background-color: #ff671a;
  color: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.card-title {
  margin: 0;
  font-size: 150%;
  padding-top: 8px;
}

.card-body img {
  border: 1px solid rgba(0,0,0,.125);
  padding: 2px;
}

.card-body .quote {
  padding: 0 2em;
}

html[data-theme=dark] .card,
html[data-theme=dark] .card-body img {
  border: 1px solid rgba(255,255,255,.125);
}
</style>
