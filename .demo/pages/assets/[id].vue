<template>
  <TairoContentWrapper>
    <template #left>
      <BaseHeading>
        <BasePlaceload v-if="pending" class="w-48 h-6 rounded" />
        <span v-else>
          {{ data.title }}
        </span>
      </BaseHeading>
    </template>

    <div class="grid grid-cols-3 gap-6">
      <BaseCard class="asset-card col-span-2">
        <BaseHeading> {{ data.manufacturer.title }} - {{ data.model.title }} </BaseHeading>
        <BaseParagraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ipsam quasi quisquam laboriosam, natus sed vero vel facilis eum. Eaque
          error amet, eveniet dolorum nostrum ipsam voluptas blanditiis dicta
          odio.
        </BaseParagraph>
      </BaseCard>
      <BaseCard class="asset-card">
        <BaseHeading> Склад: {{ data.store.title}} </BaseHeading>
        <BaseParagraph>
          <p> {{ data.store.address}}</p>
        </BaseParagraph>
      </BaseCard>
      <BaseCard class="asset-card">
        <BaseHeading> Создатель: {{ data.user_created.nickname}} </BaseHeading>
        <BaseParagraph>
          <p> email: {{ data.user_created.email}}</p>
        </BaseParagraph>
      </BaseCard>
      <BaseCard class="asset-card col-span-2">
        <BaseHeading> Создатель: {{ data.user_created.nickname}} </BaseHeading>
        <BaseParagraph>
          <p> email: {{ data.user_created.email}}</p>
        </BaseParagraph>
      </BaseCard>
    </div>
  </TairoContentWrapper>
</template>

<script setup>
import { asset } from '~/models/asset'

const route = useRoute()

const { data, pending } = asset.byId(route.params.id)
var a = 1
</script>

<style scoped>
.asset-card {
  @apply p-4;
}
</style>
