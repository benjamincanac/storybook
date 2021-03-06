export default {
  components: true,
  css: [
    '~/assets/styles/main.scss'
  ],
  buildModules: [
    '@nuxtjs/fontawesome'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  fontawesome: {
    icons: {
      solid: true
    }
  },
  storybook: {
    stories: [
      '~/stories/paragraph.stories.js'
    ],
    webpackFinal (config) {
      return config
    }
  }
}
