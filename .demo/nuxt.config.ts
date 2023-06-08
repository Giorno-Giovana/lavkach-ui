import { isProduction } from 'std-env'

import {
  demoRules,
  documentationRules,
  landingRules,
} from './config/routes-rules'

export default defineNuxtConfig({
  ssr: false,

  extends: [
    '../layers/tairo',
    '../layers/tairo-layout-sidebar',
    '../layers/tairo-layout-collapse',
  ],
  modules: [
    /**
     * Swiper is a nuxt module that allows us to use swiper in nuxt
     * wich is a carousel component used in the demo
     * @see https://github.com/cpreston321/nuxt-swiper
     */
    'nuxt-swiper',
  ],
  css: ['~/assets/css/colors.css'],

  experimental: {
    // using parcel as as watcher run faster
    // when using layers and/or in large projects
    watcher: 'parcel',
    // Write early hints when using node server.
    writeEarlyHints: true,
    // Render JSON payloads with support for revivifying complex types.
    renderJsonPayloads: true,
  },

  // nuxt behavior configuration
  runtimeConfig: {
    public: {
      apiUrl: 'http://158.160.53.137:8080/api',
      // mapbox config
      mapboxToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN,
      // nuxt-seo-kit config
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      siteName: 'Tairo by CSS Ninja',
      siteDescription:
        'The most advanced Nuxt and Tailwind CSS dashboard template',
      language: 'en',
    },
  },
  routeRules: {
    ...demoRules,
    ...landingRules,
    ...(process.env.ENABLE_DOCUMENTATION ? documentationRules : {}),
  },

  // build configuration
  hooks: {
    'vite:extendConfig'(config, { isClient }) {
      if (isProduction && isClient) {
        // @ts-ignore
        config.build.rollupOptions.output.entryFileNames = '_nuxt/e/[hash].js'
        // @ts-ignore
        config.build.rollupOptions.output.chunkFileNames = '_nuxt/c/[hash].js'
        // @ts-ignore
        config.build.rollupOptions.output.assetFileNames =
          '_nuxt/a/[hash][extname]'
      }
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/dashboards', '/layouts'],
    },
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  vite: {
    define: {
      'process.test': false,
      // This is required for shiki to work (used to render markdown code blocks)
      'process.env.VSCODE_TEXTMATE_DEBUG': false,
      // This enables vue-axe to work (used to check a11y - see .demo/plugins/vue-axe.ts)
      'process.env.ENABLE_A11Y_AXE': process.env.ENABLE_A11Y_AXE,
    },
    build: {
      target: 'esnext',
    },
  },

  // nuxt modules configuration
  unfonts: {
    google: {
      families: ['Roboto Flex', 'Inter', 'Karla', 'Fira Code'],
    },
  },
  linkChecker: {
    failOn404: true,
  },
  unhead: {
    seoOptimise: true,
  },
})
