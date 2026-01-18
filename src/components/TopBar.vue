<template>
  <div class="flex justify-between items-center mb-6 text-sm">
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-2">
        <span class="dot"></span>
        <span class="font-medium text-green-700">Engine RUNNING</span>
      </div>

      <div class="text-slate-500">
        Latency <span class="font-medium text-slate-800">16ms</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
}
</style>
