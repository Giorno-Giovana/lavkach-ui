<script setup lang="ts">
const tickets = [
  {
    id: 45651,
    title: 'Сломался телевизор',
    content: 'Перестал реагировать на любые сигналы с пульта',
  },
  {
    id: 45783,
    title: 'Не работают ТСД',
    content:
      'Новые модели, которые недавно поступили на склад, не скнаируют ЧЗ',
  },
  {
    id: 45723,
    title: 'Сломалась швабра',
    content: 'Последняя шварбра сломалась. Теперь мы ходим по говну',
  },
  {
    id: 45862,
    title: 'У меня кончилась фанатзия',
    content: 'Я не могу придумать название для демонстрационной заявки',
  },
]
</script>

<template>
  <div class="divide-muted-200 dark:divide-muted-700 space-y-6 divide-y">
    <div
      v-for="(ticket, index) in tickets"
      :key="ticket.id"
      class="flex flex-col gap-4 sm:flex-row"
      :class="index > 0 ? 'pt-6' : ''"
    >
      <!-- <BaseAvatar
        size="lg"
        :src="ticket.user.src"
        :text="ticket.user.name"
        :data-tooltip="ticket.user.name"
      /> -->
      <div class="max-w-md">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          <span>[#{{ ticket.id }}] {{ ticket.title }}</span>
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="text-muted-500 dark:text-muted-400 mb-1"
        >
          <span>{{ ticket.content }}</span>
        </BaseParagraph>
        <!-- <BaseParagraph size="xs" class="text-muted-400">
          <span>Updated {{ ticket.updated }}</span>
        </BaseParagraph> -->
      </div>
      <div class="w-full sm:ms-auto sm:w-auto">
        <BaseButton color="default" class="w-full sm:w-auto">
          <span>Перейти</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
