<template>
  <TairoTable shape="curved">
    <template #header>
      <TairoTableHeading uppercase class="pl-4">Название</TairoTableHeading>
      <TairoTableHeading uppercase>id</TairoTableHeading>
      <TairoTableHeading uppercase>external_id</TairoTableHeading>
      <TairoTableHeading uppercase>Валюта</TairoTableHeading>
      <TairoTableHeading uppercase>Язык</TairoTableHeading>
      <TairoTableHeading uppercase>Страна</TairoTableHeading>
    </template>

    <TairoTableRow v-for="company in companies" :key="company.id">
      <TairoTableCell class="pl-4">{{ company.title }}</TairoTableCell>
      <TairoTableCell light>{{ company.id }}</TairoTableCell>
      <TairoTableCell>{{ company.external_id }}</TairoTableCell>
      <TairoTableCell>{{ company.currency }}</TairoTableCell>
      <TairoTableCell>{{ company.lang }}</TairoTableCell>
      <TairoTableCell>{{ company.country }}</TairoTableCell>
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
import { company } from '~/models/company'

definePageMeta({
  title: 'Компании',
})

const companies = await company.list()
</script>
