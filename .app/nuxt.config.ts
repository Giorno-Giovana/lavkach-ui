export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiUrl: 'http://158.160.112.38:8080/api',
    },
  },
  extends: ['../layers/tairo', '../layers/tairo-layout-sidebar'],
  modules: ['@nuxt/devtools'],
})
