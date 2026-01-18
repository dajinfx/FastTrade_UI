<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-sm font-semibold text-slate-100">跨平台套利机会</h2>
        <p class="text-xs text-slate-400">实时扫描主流交易所价差与滑点</p>
      </div>
      <div class="flex items-center gap-2 text-xs">
        <span class="rounded-full bg-slate-700 px-2 py-1 text-slate-200">更新频率 2s</span>
        <span class="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-200">活跃 6</span>
      </div>
    </div>

    <div class="overflow-hidden rounded-lg border border-slate-700">
      <table class="w-full text-left text-sm">
        <thead class="bg-slate-800 text-xs uppercase text-slate-400">
          <tr>
            <th class="px-3 py-2">交易对</th>
            <th class="px-3 py-2">买入平台</th>
            <th class="px-3 py-2">卖出平台</th>
            <th class="px-3 py-2">买入价</th>
            <th class="px-3 py-2">卖出价</th>
            <th class="px-3 py-2">毛利差</th>
            <th class="px-3 py-2">净利差</th>
            <th class="px-3 py-2">状态</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in rows"
            :key="row.pair + row.buy"
            class="border-t border-slate-800 text-slate-200 hover:bg-slate-800/50"
          >
            <td class="px-3 py-2 font-medium text-slate-100">{{ row.pair }}</td>
            <td class="px-3 py-2">
              <div class="text-slate-100">{{ row.buy }}</div>
              <div class="text-xs text-slate-500">深度 {{ row.buyDepth }}</div>
            </td>
            <td class="px-3 py-2">
              <div class="text-slate-100">{{ row.sell }}</div>
              <div class="text-xs text-slate-500">深度 {{ row.sellDepth }}</div>
            </td>
            <td class="px-3 py-2">${{ row.buyPrice }}</td>
            <td class="px-3 py-2">${{ row.sellPrice }}</td>
            <td class="px-3 py-2 text-slate-300">{{ row.grossSpread }}%</td>
            <td class="px-3 py-2 font-semibold" :class="row.netClass">
              {{ row.netSpread }}%
            </td>
            <td class="px-3 py-2">
              <span class="rounded-full px-2 py-1 text-xs" :class="row.statusClass">
                {{ row.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex items-center justify-between text-xs text-slate-500">
      <div>滑点阈值 0.25% · 资金利用率 78%</div>
      <div>最近成交 6 笔 · 成功率 92%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rows = [
  {
    pair: 'BTC/USDT',
    buy: 'Binance',
    sell: 'OKX',
    buyDepth: '2.1M',
    sellDepth: '1.8M',
    buyPrice: '62,450',
    sellPrice: '63,180',
    grossSpread: '1.17',
    netSpread: '0.68',
    status: '可执行',
    statusClass: 'bg-emerald-500/20 text-emerald-200',
    netClass: 'text-emerald-400',
  },
  {
    pair: 'ETH/USDT',
    buy: 'Bybit',
    sell: 'Binance',
    buyDepth: '1.2M',
    sellDepth: '1.9M',
    buyPrice: '3,352',
    sellPrice: '3,398',
    grossSpread: '1.38',
    netSpread: '0.74',
    status: '挂单监控',
    statusClass: 'bg-sky-500/20 text-sky-200',
    netClass: 'text-emerald-400',
  },
  {
    pair: 'SOL/USDT',
    buy: 'Kraken',
    sell: 'Bybit',
    buyDepth: '640K',
    sellDepth: '820K',
    buyPrice: '149.3',
    sellPrice: '151.1',
    grossSpread: '1.21',
    netSpread: '0.43',
    status: '排队中',
    statusClass: 'bg-amber-500/20 text-amber-200',
    netClass: 'text-amber-300',
  },
  {
    pair: 'ARB/USDT',
    buy: 'Gate',
    sell: 'Bitget',
    buyDepth: '380K',
    sellDepth: '410K',
    buyPrice: '1.124',
    sellPrice: '1.131',
    grossSpread: '0.62',
    netSpread: '0.08',
    status: '待观察',
    statusClass: 'bg-slate-600/40 text-slate-200',
    netClass: 'text-slate-300',
  },
]
</script>
