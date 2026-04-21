---
title: Quiénes somos
timeline: false
feed: false
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

::: info Comunidad
En migasfree nos gusta compartir y ayudarnos mútuamente. Si estás usando migasfree, puedes integrarte en nuestra comunidad de usuarios en **Telegram**. Solicítanos una invitación por email.
:::

<div class="team-container">
  <div class="team-card vp-card" v-for="item in members">
    <div class="avatar-container">
      <img :src="item.avatar" :alt="item.name" class="member-avatar" />
    </div>
    <div class="member-info">
      <h3 class="member-name">{{item.name}}</h3>
      <p class="member-role">{{item.title}}</p>
      <div class="member-bio">
        <p>«{{item.text}}»</p>
      </div>
      <div class="member-social">
        <a v-for="el in item.links" :href="el.link" target="_blank" class="social-btn" :title="el.icon">
          <VPIcon :icon="el.icon" />
        </a>
      </div>
    </div>
  </div>
</div>

<style scoped>
.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin: 4rem 0;
}

.team-card {
  padding: 2.5rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 32px !important;
}

.avatar-container {
  width: 140px;
  height: 140px;
  margin-bottom: 1.5rem;
  position: relative;
}

.avatar-container::after {
  content: '';
  position: absolute;
  inset: -8px;
  border: 2px solid var(--brand-primary);
  border-radius: 50%;
  opacity: 0.2;
}

.member-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border: 4px solid white;
}

.member-name {
  font-family: 'Outfit', sans-serif;
  font-size: 1.6rem;
  font-weight: 850;
  color: var(--brand-primary);
  margin: 0;
  letter-spacing: -0.02em;
}

.member-role {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: #a38c86;
  margin: 0.5rem 0 1.5rem;
}

.member-bio {
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.member-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  color: var(--brand-primary);
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
}

.social-btn:hover {
  background: var(--brand-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(67, 20, 7, 0.2);
}

[data-theme='dark'] {
  .member-avatar {
    border-color: #1a1a1a;
  }
  .member-name {
    color: #fff;
  }
  .member-role {
    color: var(--brand-tertiary);
  }
  .member-bio {
    color: #ccc;
  }
  .social-btn {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);
    color: var(--brand-tertiary);
  }
  .social-btn:hover {
    background: var(--brand-tertiary);
    color: var(--brand-primary);
  }
}

@media (max-width: 640px) {
  .team-container {
    grid-template-columns: 1fr;
  }
}
</style>
