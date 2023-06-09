<template>
     <TairoTable shape="curved">
      <template #header>
        <TairoTableHeading uppercase class="pl-4">Наименование</TairoTableHeading
        >
        <TairoTableHeading uppercase>Тип</TairoTableHeading>
        <TairoTableHeading uppercase>Сейчас у</TairoTableHeading>
        <TairoTableHeading uppercase>Серийный номер</TairoTableHeading>
        <TairoTableHeading uppercase>Производитель</TairoTableHeading>
        <TairoTableHeading uppercase>Статус</TairoTableHeading>
        <TairoTableHeading uppercase>Склад</TairoTableHeading>
        <TairoTableHeading uppercase>Создал</TairoTableHeading>
        <TairoTableHeading uppercase>Действия</TairoTableHeading>
      </template>

      <TairoTableRow v-for="d in data" :key="d.id">
        <TairoTableCell class="pl-4">{{ d.title }}</TairoTableCell>
        <TairoTableCell>{{ d.asset_type.title }}</TairoTableCell>
        <TairoTableCell>{{ d.at }}</TairoTableCell>
        <TairoTableCell>{{ d.serial }}</TairoTableCell>
        <TairoTableCell>{{ d.manufacturer.title }}</TairoTableCell>
        <TairoTableCell>{{ d.status }}</TairoTableCell>
        <TairoTableCell>{{ d.store.title }}</TairoTableCell>
        <TairoTableCell>{{ d.user_created_id.nickname }}</TairoTableCell>
        <TairoTableCell>
          <BaseButtonAction> Открыть </BaseButtonAction>
        </TairoTableCell>
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
