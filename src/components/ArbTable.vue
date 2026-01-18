<template>
  <table>
    <thead>
      <tr>
        <th>Pair</th><th>Exch A</th><th>Exch B</th><th>Spread</th><th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in rows" :key="r.pair">
        <td>{{ r.pair }}</td>
        <td>{{ r.a }}</td>
        <td>{{ r.b }}</td>
        <td>{{ r.spread }}</td>
        <td :class="r.cls">{{ r.status }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const rows = [
  {pair:'USDC/USDT',a:'Binance',b:'MEXC',spread:'0.104%',status:'Targeting',cls:'ok'},
  {pair:'FDUSD/USDT',a:'Binance',b:'OKX',spread:'0.021%',status:'Monitoring',cls:'warn'},
  {pair:'DAI/USDT',a:'Bybit',b:'MEXC',spread:'0.004%',status:'Low Vol',cls:'bad'},
]
</script>
