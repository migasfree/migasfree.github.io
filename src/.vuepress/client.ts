import { defineClientConfig } from 'vuepress/client'

import TwitterLink from './components/TwitterLink'
import LiteYoutubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('TwitterLink', TwitterLink)
    app.component('LiteYoutubeEmbed', LiteYoutubeEmbed)
  },
})
