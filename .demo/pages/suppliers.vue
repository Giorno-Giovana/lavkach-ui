<template>
  <TairoTable shape="curved">
    <template #header>
      <TairoTableHeading uppercase class="pl-4">Название</TairoTableHeading>
      <!--<TairoTableHeading uppercase>id</TairoTableHeading>-->
      <TairoTableHeading uppercase>external_id</TairoTableHeading>
      <!--<TairoTableHeading uppercase>LSN</TairoTableHeading>
      <TairoTableHeading uppercase>Company id</TairoTableHeading>-->
    </template>

    <TairoTableRow v-for="d in data" :key="d.id">
      <TairoTableCell class="pl-4">{{ d.title }}</TairoTableCell>
      <!--<TairoTableCell light>{{ d.id }}</TairoTableCell>-->
      <TairoTableCell>{{ d.external_id }}</TairoTableCell>
      <!--<TairoTableCell>{{ d.lsn }}</TairoTableCell>
      <TairoTableCell>{{ d.company_id }}</TairoTableCell>-->
    </TairoTableRow>
  </TairoTable>
</template>

<script setup lang="ts">
import { supplier } from '~/models/supplier';


definePageMeta({
  title: 'Поставщики',
})

const { data } = await supplier.list()
</script>
