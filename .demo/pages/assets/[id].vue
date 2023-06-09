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
        <BaseHeading> Производитель </BaseHeading>
        <BaseParagraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ipsam quasi quisquam laboriosam, natus sed vero vel facilis eum. Eaque
          error amet, eveniet dolorum nostrum ipsam voluptas blanditiis dicta
          odio.
        </BaseParagraph>
      </BaseCard>
      <BaseCard class="asset-card">
        <BaseHeading> Склад </BaseHeading>
        <BaseParagraph>
        </BaseParagraph>
      </BaseCard>
    </div>
  </TairoContentWrapper>
</template>

<script setup>
import { asset } from '~/models/asset'

const route = useRoute()

const { data, pending } = asset.byId(route.params.id)
</script>

<style scoped>
.asset-card {
  @apply p-4;
}
</style>
