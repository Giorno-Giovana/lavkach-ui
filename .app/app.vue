<script setup lang="ts">
const apiUrl = useRuntimeConfig().public.apiUrl
const userToken = useLocalStorage('token', '').value

$fetch = $fetch.create({ baseURL: apiUrl, onRequest({ options }) {
    options.headers = {
      Authorization: userToken
    }
  }
})
</script>

<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
