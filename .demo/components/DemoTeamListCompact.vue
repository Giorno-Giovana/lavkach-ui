<script setup lang="ts">
const props = defineProps<{
  actions?: boolean
}>()

const members = [
  {
    id: 0,
    firstName: 'Витя',
    lastName: 'Швед',
    image: '/img/avatars/3.svg',
    text: 'EC',
    role: 'Ждет заказ',
  },
  {
    id: 1,
    firstName: 'Саня',
    lastName: 'Зверь',
    image: undefined,
    text: 'SC',
    role: 'Ждет заказ',
  },
  {
    id: 2,
    firstName: 'Филя',
    lastName: 'Мощь',
    image: '/img/avatars/4.svg',
    text: 'TS',
    role: 'Ждет заказ',
  },
  {
    id: 3,
    firstName: 'Денчик',
    lastName: '))))))',
    image: undefined,
    text: 'NL',
    role: 'Ждет заказ',
  },
]
</script>

<template>
  <div class="mb-2 space-y-5">
    <div
      v-for="member in members"
      :key="member.id"
      class="flex items-center gap-3"
    >
      <!-- <BaseAvatar
        :src="member.image"
        :text="member.text"
        class="bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
      /> -->
      <div>
        <BaseHeading
          as="h4"
          size="sm"
          weight="light"
          lead="tight"
          class="text-muted-800 dark:text-white"
        >
          <span>{{ member.firstName }} {{ member.lastName }}</span>
        </BaseHeading>
        <BaseParagraph size="xs">
          <span class="text-muted-400">
            {{ member.role }}
          </span>
        </BaseParagraph>
      </div>
      <Icon name="material-symbols:alarm" class="h-5 w-5 mb-3" />
      <!-- <div v-if="props.actions" class="ms-auto flex items-center">
        <BaseButtonIcon shape="curved" muted class="scale-75">
          <Icon name="ph:phone-duotone" class="h-5 w-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="curved" muted class="scale-75">
          <Icon name="ph:video-camera-duotone" class="h-5 w-5" />
        </BaseButtonIcon>
      </div> -->
    </div>
  </div>
</template>
