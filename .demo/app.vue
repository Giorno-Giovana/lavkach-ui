<script setup lang="ts">
const apiUrl = useRuntimeConfig().public.apiUrl
const userToken = useLocalStorage('token', '').value

$fetch = $fetch.create({
  baseURL: apiUrl,
  onRequest({ options }) {
    options.headers = {
      Authorization: userToken,
    }
  },
})

const route = useRoute()
const app = useAppConfig()

/**
 * Global head configuration
 * @see https://unhead.harlanzw.com/
 * @see https://github.com/unjs/unhead/tree/main
 */
useHead({
  title: route.meta.title,
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${app.tairo.title}`
      : `${app.tairo.title || 'Tairo'}`
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png',
    },
  ],

  meta: [
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@cssninjaStudio',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
    {
      name: 'og:image:width',
      content: '1200',
    },
    {
      name: 'og:image:height',
      content: '630',
    },
    {
      name: 'og:image',
      content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(
        route.meta.description ||
          (route.meta.preview
            ? `${route.meta.preview?.title} - ${route.meta.preview?.description}`
            : 'Nuxt & Tailwind CSS dashboard system'),
      )}&url=${encodeURIComponent(
        'https://media.cssninja.io/content/products/logos/tairo-text-white.svg',
      )}&previewUrl=${encodeURIComponent(
        `https://tairo.cssninja.io${
          route.meta.preview?.src || '/img/screens/documentation-hub.png'
        }`,
      )}`,
    },
  ],
})

// @ts-ignore
// import { StreamBarcodeReader } from 'vue-barcode-reader'

const scanning = useState('scanning', () => false)

// const onDecode = (barcode: string) => {
//   console.log(barcode)
//   scanning.value = false
// }
</script>

<template>
  <div>
    <!-- <StreamBarcodeReader
      v-if="scanning"
      @decode="onDecode"
      @loaded="onLoaded"
      class="fixed"
    /> -->

    <!-- 
      Vue Axe Popup
      @see .demo/plugins/vue-axe.client.ts
    -->
    <VueAxePopup />

    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--color-primary-500)" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
