<template>
  <TairoTable shape="curved">
    <template #header>
      <TairoTableHeading uppercase class="pl-4">Название</TairoTableHeading>
      <TairoTableHeading uppercase>id</TairoTableHeading>
      <TairoTableHeading uppercase>external_id</TairoTableHeading>
      <TairoTableHeading uppercase>Адрес</TairoTableHeading>
      <TairoTableHeading uppercase>Источник</TairoTableHeading>
    </template>

    <TairoTableRow v-for="store in stores" :key="store.id">
      <TairoTableCell class="pl-4">{{ store.title }}</TairoTableCell>
      <TairoTableCell light>{{ store.id }}</TairoTableCell>
      <TairoTableCell>{{ store.external_id }}</TairoTableCell>
      <TairoTableCell>{{ store.address }}</TairoTableCell>
      <TairoTableCell>{{ store.source }}</TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
import { store } from '~/models/store'

definePageMeta({
  title: 'Склады',
})

// defineProps:

const stores = await store.list()
</script>
