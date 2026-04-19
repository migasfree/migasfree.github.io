import { defineClientConfig } from 'vuepress/client'

import TwitterLink from './components/TwitterLink'
import ROICalculator from './components/ROICalculator.vue'
import GlassCard from './components/GlassCard.vue'
import LiteYoutubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('TwitterLink', TwitterLink)
    app.component('ROICalculator', ROICalculator)
    app.component('GlassCard', GlassCard)
    app.component('LiteYoutubeEmbed', LiteYoutubeEmbed)
  },
})
