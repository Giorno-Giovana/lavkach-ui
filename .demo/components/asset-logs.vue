<template>
  <TairoTable shape="curved">

    <template #header>
      <TairoTableHeading>heh</TairoTableHeading>
    </template>

    <TairoTableRow>
      <TairoTableCell class="pl-4">{{ d.title }}</TairoTableCell>
    </TairoTableRow>

  </TairoTable>
</template>

<script setup lang="ts">
import { AssetLogJson } from '~/models/assetLog';

const logs: AssetLogJson[] = [
  { id: 1, asset_id: 'daksmdlk123klsd;kl1', date: Date.now().toLocaleString(), action: 'store_id', from: 'pqweopsad', to: 'adioqjiw' },
  { id: 2, asset_id: 'daksmdlk123klsd;kl1', date: Date.now().toLocaleString(), action: 'courier_id', from: 'pqweopsad', to: 'adioqjiw' },
  { id: 3, asset_id: 'daksmdlk123klsd;kl1', date: Date.now().toLocaleString(), action: 'status', from: 'pqweopsad', to: 'adioqjiw' },
  { id: 4, asset_id: 'daksmdlk123klsd;kl1', date: Date.now().toLocaleString(), action: 'at', from: 'pqweopsad', to: 'adioqjiw' },
  { id: 5, asset_id: 'daksmdlk123klsd;kl1', date: Date.now().toLocaleString(), action: 'store_id', from: 'pqweopsad', to: 'adioqjiw' },
]
</script>