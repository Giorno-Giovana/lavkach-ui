export default defineNuxtConfig({
  extends: [
    '../layers/tairo',
    '../layers/tairo-layout-sidebar',
  ],
  modules: [
    '@nuxt/devtools',
  ]
})
