<script setup lang="ts">
import { Companies } from "~/models/companies";
import {Company} from "~/models/company";

definePageMeta({
  title: 'Компании',
})

const { data, pending, error, refresh } = await Companies.fetch()
</script>

<template>
  <div>
    <pre>
      pending: {{ pending }}
      {{ error }}
      {{ data }}
    </pre>

    <div></div>
  </div>
</template>
