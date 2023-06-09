<script setup>
defineProps(['order', 'hideLink'])

const notCollapsed = ref(false)
</script>

<template>
  <BaseCard shape="curved" class="flex flex-col p-5 sm:items-center">
    <div class="flex flex-col">
      <div class="relative" @click="notCollapsed = !notCollapsed">
        <NuxtLink :to="`/orders/${order.id}`" v-if="!hideLink">
          <BaseButtonIcon
            class="-right-1 -top-1 w-8 h-8"
            style="position: absolute"
          >
            <Icon name="ic:twotone-open-in-new" class="h-full w-full" />
          </BaseButtonIcon>
        </NuxtLink>
        <div class="flex flex-col gap-3 text-center">
          <div>
            <BaseHeading
              tag="h3"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              Зявка №{{ order.number }}
            </BaseHeading>
            <BaseParagraph
              lead="none"
              class="text-muted-400 flex items-end text-sm mt-6 whitespace-pre-wrap"
            >
              {{ order.description }}
             Плохо стал тормозить, а так же быстро спускаеют колеса, пытались подкачивать, но хватает на 1-2 дня
            </BaseParagraph>
          </div>
        </div>
      </div>
      <div
        @click="notCollapsed = !notCollapsed"
        class="divide-muted-200 dark:divide-muted-700 grid grid-cols-2 sm:grid-cols-4 w-full items-center justify-center gap-y-4 my-4 sm:divide-x"
      >
        <div class="flex flex-col gap-1 px-4 text-center">
          <BaseHeading
            tag="h3"
            size="md"
            weight="semibold"
            class="text-muted-800 dark:text-muted-100"
          >
            <span> {{ order.status }} </span>
          </BaseHeading>
          <BaseParagraph
            lead="none"
            weight="semibold"
            class="text-muted-400 !text-[0.65rem] uppercase"
          >
            <span>Статус</span>
          </BaseParagraph>
        </div>
        <div class="flex flex-col gap-1 px-4 text-center">
          <BaseHeading
            tag="h3"
            size="md"
            weight="semibold"
            class="text-muted-800 dark:text-muted-100"
          >
            <!--<span> {{ order.lsn }} </span>-->
          </BaseHeading>
          <BaseParagraph
            lead="none"
            weight="semibold"
            class="text-muted-400 !text-[0.65rem] uppercase"
          >
            <!--<span>lsn</span>-->
          </BaseParagraph>
        </div>
        <div class="flex flex-col gap-1 px-4 text-center">
          <BaseHeading
            tag="h3"
            size="md"
            weight="semibold"
            class="text-muted-800 dark:text-muted-100"
          >
            <span> {{ order.store.title }} </span>
          </BaseHeading>
          <BaseParagraph
            lead="none"
            weight="semibold"
            class="text-muted-400 !text-[0.65rem] uppercase"
          >
            <span>Склад</span>
          </BaseParagraph>
        </div>
        <div class="flex flex-col gap-1 px-4 text-center">
          <BaseHeading
            tag="h3"
            size="md"
            weight="semibold"
            class="text-muted-800 dark:text-muted-100"
          >
            <span> {{ order.user_created.nickname }} </span>
          </BaseHeading>
          <BaseParagraph
            lead="none"
            weight="semibold"
            class="text-muted-400 !text-[0.65rem] uppercase"
          >
            <span>Создан</span>
          </BaseParagraph>
        </div>
      </div>
    </div>

    <div v-if="notCollapsed" class="w-full border-gray-500 border-t pt-4 mt-8">
      <div class="pt-6">
        <DemoFlexTableRow
          v-for="(line, index) in order.order_lines"
          :key="index"
          shape="straight"
          condensed
          spaced
        >
          <template #start>
            <div
              class="relative mb-4 flex grow items-center gap-2 px-6 sm:mb-0 sm:px-2"
            >
              <span
                v-if="index < 1"
                class="text-muted-400 absolute hidden font-sans text-xs font-medium uppercase sm:-top-10 sm:start-2 sm:block"
              >
                Товар/услуга
              </span>

              <div>
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-700 dark:text-muted-100"
                >
                  <span> {{ line.title }} </span>
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400"
                >
                  {{ line.description }}
                </BaseParagraph>
              </div>
            </div>
          </template>
          <template #end>
            <!--<DemoFlexTableCell
              label="Создал"
              :hide-label="index > 0"
              class="w-full sm:w-40"
            >
              <span
                class="text-muted-500 dark:text-muted-400 font-sans text-sm"
              >
                {{ line.user_created || '-' }}
              </span>
            </DemoFlexTableCell>-->
            <!--<DemoFlexTableCell
              label="lsn"
              :hide-label="index > 0"
              class="w-full sm:w-40"
            >
              <span
                class="text-muted-500 dark:text-muted-400 font-sans text-sm"
              >
                {{ line.lsn }}
              </span>
            </DemoFlexTableCell>-->
            <DemoFlexTableCell
              label="КОличество"
              :hide-label="index > 0"
              class="w-full sm:w-40"
            >
              <span
                class="text-muted-500 dark:text-muted-400 font-sans text-sm"
              >
                {{ line.quantity }}
              </span>
            </DemoFlexTableCell>
          </template>
        </DemoFlexTableRow>
      </div>

      <div class="grid justify-around grid-cols-2 md:grid-cols-4 gap-8 mt-6">
        <BaseButtonAction shape="curved" color="danger" style="height: 44px">
          Отменить заявку
        </BaseButtonAction>
        <BaseButtonAction shape="curved" color="warning" style="height: 44px">
          Добавить услугу
        </BaseButtonAction>
        <BaseButtonAction shape="curved" color="info" style="height: 44px">
          Работа завершена
        </BaseButtonAction>
        <BaseButtonAction shape="curved" color="primary" style="height: 44px">
          Взять в работу
        </BaseButtonAction>
      </div>
    </div>
  </BaseCard>
</template>
