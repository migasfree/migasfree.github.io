import type { FunctionalComponent } from 'vue'
import { h } from 'vue'

const TwitterLink: FunctionalComponent = () =>
  h(
    'div',
    { class: 'vp-nav-item vp-action' },
    h('a', {
      class: 'vp-action-link',
      href: 'https://twitter.com/migasfree',
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': 'twitter',
      innerHTML: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            style="width:1.25rem;height:1.25rem;vertical-align:middle"
        >
            <circle cx="512" cy="512" r="512" fill="#3397db" />
            <path
                fill="#fff"
                d="M808.325 346.204c-18.128 16.702-25.664 25.257-25.664 25.257s6.518 130.151-61.715 230.362-156.427 160.296-284.542 173.128c-128.114 12.832-211.623-39.31-211.623-39.31s56.012-3.259 91.86-16.906c35.644-13.85 86.97-49.901 86.97-49.901s-72.917-22.609-99.191-47.865c-26.275-25.46-32.793-40.532-32.793-40.532l72.103-1.019s-75.77-40.532-97.36-72.306-24.44-63.141-24.44-63.141l55.4 22.405s-46.032-62.938-52.55-111.82 8.352-75.159 8.352-75.159 23.423 44.199 119.967 93.082 178.017 46.032 178.017 46.032-31.163-108.154 64.363-156.02 161.11 32.997 161.11 32.997 16.703-4.481 29.127-9.166c12.425-4.48 30.348-12.832 30.348-12.832l-29.33 52.754 45.421-4.889s-5.703 8.147-23.83 24.85z"
            />
        </svg>`,
    }),
  )

TwitterLink.displayName = 'TwitterLink'

export default TwitterLink
