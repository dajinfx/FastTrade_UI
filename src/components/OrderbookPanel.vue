<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-sm font-semibold text-slate-100">盘口深度</h2>
        <p class="text-xs text-slate-400">BTC/USDT · Binance vs OKX</p>
      </div>
      <div class="text-xs text-slate-500">更新时间 0.4s</div>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div>
        <div class="mb-2 text-xs text-emerald-300">买盘</div>
        <ul class="space-y-1 text-xs">
          <li
            v-for="bid in bids"
            :key="bid.price"
            class="flex items-center justify-between rounded bg-emerald-500/10 px-2 py-1"
          >
            <span class="text-emerald-200">{{ bid.price }}</span>
            <span class="text-slate-400">{{ bid.size }}</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="mb-2 text-xs text-rose-300">卖盘</div>
        <ul class="space-y-1 text-xs">
          <li
            v-for="ask in asks"
            :key="ask.price"
            class="flex items-center justify-between rounded bg-rose-500/10 px-2 py-1"
          >
            <span class="text-rose-200">{{ ask.price }}</span>
            <span class="text-slate-400">{{ ask.size }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="rounded-lg border border-slate-700 p-2 text-xs text-slate-400">
      价差区间：$62,450 - $63,180 · 预估滑点 0.18% · 成交速度 120ms
    </div>
  </div>
</template>

<script setup lang="ts">
const bids = [
  { price: '62,410', size: '1.42 BTC' },
  { price: '62,380', size: '0.86 BTC' },
  { price: '62,340', size: '2.05 BTC' },
  { price: '62,300', size: '3.12 BTC' },
  { price: '62,260', size: '1.77 BTC' },
]

const asks = [
  { price: '63,140', size: '1.05 BTC' },
  { price: '63,180', size: '0.78 BTC' },
  { price: '63,210', size: '1.64 BTC' },
  { price: '63,250', size: '2.45 BTC' },
  { price: '63,280', size: '1.11 BTC' },
]
</script>
