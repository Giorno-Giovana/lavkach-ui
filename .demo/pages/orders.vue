<template>
  <div>
    <div class="mb-8 flex">
      <BaseInput v-model="search" :classes="{ wrapper: 'w-full' }" />
      <BaseButton class="ml-4"> Создать </BaseButton>
    </div>

    <TairoTable shape="curved">
      <template #header>
        <TairoTableHeading uppercase class="pl-4">Название</TairoTableHeading>
        <TairoTableHeading uppercase>id</TairoTableHeading>
        <TairoTableHeading uppercase>external_id</TairoTableHeading>
        <TairoTableHeading uppercase>Адрес</TairoTableHeading>
        <TairoTableHeading uppercase>Источник</TairoTableHeading>
      </template>

      <TairoTableRow v-for="d in filteredData" :key="d.id">
        <TairoTableCell class="pl-4">{{ d.title }}</TairoTableCell>
        <TairoTableCell light>{{ d.id }}</TairoTableCell>
        <TairoTableCell>{{ d.external_id }}</TairoTableCell>
        <TairoTableCell>{{ d.address }}</TairoTableCell>
        <TairoTableCell>{{ d.source }}</TairoTableCell>
      </TairoTableRow>
    </TairoTable>
  </div>
</template>

<script setup lang="ts">
import { order } from '~/models/order'
import { store } from '~/models/store'

definePageMeta({
  title: 'Заявки',
})

const { data, error } = await store.list()
const { search, filteredData } = useSearch(data.value, error.value)

order.list()
</script>
