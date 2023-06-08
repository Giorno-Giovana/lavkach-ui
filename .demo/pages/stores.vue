<template>
  <TairoTable shape="curved">
    <template #header>
      <TairoTableHeading uppercase class="pl-4">Название</TairoTableHeading>
      <TairoTableHeading uppercase>id</TairoTableHeading>
      <TairoTableHeading uppercase>external_id</TairoTableHeading>
      <TairoTableHeading uppercase>Адрес</TairoTableHeading>
      <TairoTableHeading uppercase>Источник</TairoTableHeading>
    </template>

    <TairoTableRow v-for="d in data" :key="d.id">
      <TairoTableCell class="pl-4">{{ d.title }}</TairoTableCell>
      <TairoTableCell light>{{ d.id }}</TairoTableCell>
      <TairoTableCell>{{ d.external_id }}</TairoTableCell>
      <TairoTableCell>{{ d.address }}</TairoTableCell>
      <TairoTableCell>{{ d.source }}</TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
import { store } from '~/models/store'

definePageMeta({
  title: 'Склады',
})

const { data } = await store.list()
</script>
