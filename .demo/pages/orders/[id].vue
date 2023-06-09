<template>
  <pre>
    <Order :order="o" :hide-link="true"/>
  </pre>
</template>

<script setup>
import { order } from '~/models/order'
const route = useRoute()

const o = await order.byId(route.params.id)
</script>
