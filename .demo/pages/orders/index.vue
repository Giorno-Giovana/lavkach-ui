<script setup lang="ts">
import { order } from '~/models/order'

definePageMeta({
  title: 'Заявки',
})

const { data } = order.list()
</script>

<template>
  <TairoContentWrapper class="md:w-2/3 mx-auto">
    <template #right>
      <BaseButton
        color="primary"
        class="w-full sm:w-32"
        @click="$router.push('/orders/create')"
      >
        <Icon name="lucide:plus" class="h-4 w-4" />
        <span>Создать</span>
      </BaseButton>
    </template>
    <div>
      <div class="space-y-4">
        <Order v-for="o in data" :order="o" />
      </div>
    </div>
  </TairoContentWrapper>
</template>
