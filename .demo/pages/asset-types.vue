<template>
  <TairoTable shape="curved">
    <template #header>
      <TairoTableHeading uppercase class="pl-4">Название</TairoTableHeading>
      <TairoTableHeading uppercase>id</TairoTableHeading>
      <TairoTableHeading uppercase>Обязателен серийный номер</TairoTableHeading>
      <TairoTableHeading uppercase>LSN</TairoTableHeading>
      <TairoTableHeading uppercase>Источник</TairoTableHeading>
      <TairoTableHeading uppercase>Тип</TairoTableHeading>
    </template>

    <TairoTableRow v-for="d in data" :key="d.id">
      <TairoTableCell class="pl-4">{{ d.title }}</TairoTableCell>
      <TairoTableCell light>{{ d.id }}</TairoTableCell>
      <TairoTableCell>{{ d.serial_required }}</TairoTableCell>
      <TairoTableCell>{{ d.lsn }}</TairoTableCell>
      <TairoTableCell>{{ d.source }}</TairoTableCell>
      <TairoTableCell>{{ d.type }}</TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
import { assetType } from '~/models/assetType'

definePageMeta({
  title: 'Типы оборудования',
})

const { data } = await assetType.list()
</script>
