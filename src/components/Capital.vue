<template>
  <div class="space-y-4">
    <div
      v-for="row in rows"
      :key="row.name"
      class="flex justify-between items-center"
    >
      <div>
        <div class="font-medium">{{ row.name }}</div>
        <div class="text-xs text-slate-400">{{ row.status }}</div>
      </div>

      <div class="amount">
        {{ row.amount }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rows = [
  { name: 'Binance', status: 'Available', amount: '$981.09' },
  { name: 'MEXC', status: 'Available', amount: '$1019.37' },
  { name: 'In Transfer', status: 'Pending', amount: '$320' },
]
</script>

<style scoped>
.amount {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.01em;
}
</style>
