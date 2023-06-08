<template>
  <TairoTable shape="curved">
    <template #header>
      <TairoTableHeading uppercase class="pl-4">Название</TairoTableHeading>
      <TairoTableHeading uppercase>id</TairoTableHeading>
      <TairoTableHeading uppercase>LSN</TairoTableHeading>
      <TairoTableHeading uppercase>Тип</TairoTableHeading>
      <TairoTableHeading uppercase>Сейчас у</TairoTableHeading>
      <TairoTableHeading uppercase>Серийный номер</TairoTableHeading>
      <TairoTableHeading uppercase>Статус</TairoTableHeading>
      <TairoTableHeading uppercase>Склад</TairoTableHeading>
      <TairoTableHeading uppercase>Создал</TairoTableHeading>
    </template>

    <TairoTableRow v-for="d in data" :key="d.id">
      <TairoTableCell class="pl-4">{{ d.title }}</TairoTableCell>
      <TairoTableCell light>{{ d.id }}</TairoTableCell>
      <TairoTableCell>{{ d.lsn }}</TairoTableCell>
      <TairoTableCell>{{ d.asset_type.title }}</TairoTableCell>
      <TairoTableCell>{{ d.at }}</TairoTableCell>
      <TairoTableCell>{{ d.serial }}</TairoTableCell>
      <TairoTableCell>{{ d.status }}</TairoTableCell>
      <TairoTableCell>{{ d.store.title }}</TairoTableCell>
      <TairoTableCell>{{ d.user.nickname }}</TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
import { asset } from '~/models/asset'

definePageMeta({
  title: 'Оборудование',
})

const { data } = await asset.list()
</script>
