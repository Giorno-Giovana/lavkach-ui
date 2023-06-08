<template>
  <TairoTable shape="curved">
    <template #header>
      <TairoTableHeading uppercase class="pl-4">Название</TairoTableHeading>
      <TairoTableHeading uppercase>LSN</TairoTableHeading>
      <TairoTableHeading uppercase>Производитель</TairoTableHeading>
    </template>

    <TairoTableRow v-for="d in data" :key="d.id">
      <TairoTableCell class="pl-4">{{ d.title }}</TairoTableCell>
      <TairoTableCell>{{ d.lsn }}</TairoTableCell>
      <TairoTableCell>{{ d.manufacturer.title }}</TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
import { model } from '~/models/model'

definePageMeta({
  title: 'Модели',
})

const { data } = await model.list()
</script>
