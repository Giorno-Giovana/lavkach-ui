<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  title: 'Вход',
})

const onSubmit = console.log

const barcode = ref('')
</script>

<template>
  <div
    class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"
  >
    <div
      class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"
    ></div>
    <div class="flex w-full items-center justify-center">
      <div class="relative mx-auto w-full max-w-2xl">
        <!--Form-->
        <div class="me-auto ms-auto mt-4 w-full">
          <form
            method="POST"
            action=""
            @submit.prevent="onSubmit"
            class="me-auto ms-auto mt-4 w-full max-w-md"
            novalidate
          >
            <img src="~/assets/img/bike.png" class="mx-auto" />

            <div class="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Войти в Lavkach
              </BaseHeading>
            </div>
            <div class="px-8 py-4">
              <div class="mb-4 space-y-4">
                <BaseInput
                  :model-value="barcode"
                  label="qr код"
                  placeholder="12381278957542908384"
                />
              </div>
              <div class="mb-6">
                <BaseButton type="submit" color="primary" class="!h-12 w-full">
                  Войти
                </BaseButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
