<template>
  <TairoContentWrapper>
    <template #left>
      <BaseButtonIcon @click="$router.push('/orders')">
        <Icon name="material-symbols:arrow-back" class="w-5 h-5" />
      </BaseButtonIcon>

      <BaseHeading as="h3" size="lg" weight="medium">
        Создать заявку
      </BaseHeading>
    </template>

    <form class="flex flex-col gap-y-8" @submit.prevent="sendForm">
      <BaseInput
        label="Баркод"
        v-model="form.asset_id"
        placeholder="81cfee07-1a00-443c-8869-494a87fd411a"
      />
      <BaseTextarea
        label="Описание проблемы"
        shape="curved"
        placeholder="У колеса пробило шину"
        rows="5"
        v-model:model-value="form.description"
      />
      <BaseButton type="submit">Отправить</BaseButton>
    </form>
  </TairoContentWrapper>
</template>

<script setup>
definePageMeta({ title: 'Создание заявки' })
import { order } from '~/models/order'

const form = reactive({
  description: '',
  asset_id: '',
})

const sendForm = async () => {
  try {
    await order.createByAsset(form)
  } catch {}
}
</script>
