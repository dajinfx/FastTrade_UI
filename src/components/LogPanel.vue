<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-semibold text-slate-100">执行日志</h2>
      <span class="text-xs text-slate-500">过去 5 分钟</span>
    </div>

    <ul class="space-y-1 text-xs text-slate-400">
      <li v-for="entry in logs" :key="entry.time" class="flex gap-3">
        <span class="text-slate-500">{{ entry.time }}</span>
        <span :class="entry.levelClass">{{ entry.level }}</span>
        <span class="text-slate-300">{{ entry.message }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const logs = [
  {
    time: '14:32:10',
    level: 'INFO',
    levelClass: 'text-sky-300',
    message: 'BTC/USDT 价差 0.68% 已触发自动执行，撮合耗时 112ms。',
  },
  {
    time: '14:31:42',
    level: 'WARN',
    levelClass: 'text-amber-300',
    message: 'SOL/USDT 滑点接近阈值 0.25%，建议降低下单量。',
  },
  {
    time: '14:31:05',
    level: 'INFO',
    levelClass: 'text-sky-300',
    message: 'OKX 余额回补完成，释放资金 120K USDT。',
  },
  {
    time: '14:30:28',
    level: 'ERROR',
    levelClass: 'text-rose-300',
    message: 'Gate API 延迟异常，策略自动降级为监控模式。',
  },
  {
    time: '14:29:54',
    level: 'INFO',
    levelClass: 'text-sky-300',
    message: '风控评分 76/100，继续执行策略。',
  },
]
</script>
