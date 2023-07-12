import { defineClientConfig } from '@vuepress/client'

import TwitterLink from './components/TwitterLink'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('TwitterLink', TwitterLink)
  },
})
