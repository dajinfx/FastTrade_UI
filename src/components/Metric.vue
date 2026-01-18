<template>
  <div class="card">
    <div class="sub mb-2">{{ title }}</div>
    <div class="text-3xl font-semibold">{{ value }}</div>
    <div class="text-sm mt-2 font-medium" :class="cls">{{ arrow }} {{ delta }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{title:string,value:string,delta:string}>()
const neg = props.delta.trim().startsWith('-')
const cls = neg ? 'bad' : 'ok'
const arrow = neg ? '↓' : '↑'
</script>


