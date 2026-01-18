<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-sm font-semibold text-slate-100">资金调度</h2>
        <p class="text-xs text-slate-400">跨所余额与可用保证金</p>
      </div>
      <span class="text-xs text-emerald-300">总资产 $4.28M</span>
    </div>

    <div class="space-y-2 text-xs">
      <div
        v-for="account in accounts"
        :key="account.exchange"
        class="flex items-center justify-between rounded-lg border border-slate-700 px-3 py-2"
      >
        <div>
          <div class="text-slate-100">{{ account.exchange }}</div>
          <div class="text-slate-500">可用 {{ account.available }}</div>
        </div>
        <div class="text-right">
          <div class="text-slate-200">{{ account.balance }}</div>
          <div class="text-slate-500">占比 {{ account.share }}</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-2 text-xs">
      <div class="rounded-lg bg-slate-700/40 p-2">
        <div class="text-slate-400">在途划转</div>
        <div class="mt-1 text-slate-100">$320K</div>
      </div>
      <div class="rounded-lg bg-slate-700/40 p-2">
        <div class="text-slate-400">风险敞口</div>
        <div class="mt-1 text-amber-300">中等</div>
      </div>
      <div class="rounded-lg bg-slate-700/40 p-2">
        <div class="text-slate-400">杠杆阈值</div>
        <div class="mt-1 text-emerald-300">1.6x</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const accounts = [
  {
    exchange: 'Binance',
    available: '1.12M USDT',
    balance: '$1.86M',
    share: '43%',
  },
  {
    exchange: 'OKX',
    available: '820K USDT',
    balance: '$1.34M',
    share: '31%',
  },
  {
    exchange: 'Bybit',
    available: '530K USDT',
    balance: '$1.08M',
    share: '26%',
  },
]
</script>
