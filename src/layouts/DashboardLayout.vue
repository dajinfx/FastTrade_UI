<template>
  <div class="flex min-h-screen">
    <SideNav />

    <main class="flex-1 p-6">
      <TopBar />

      <!-- 顶部指标（视觉锚点） -->
      <div class="grid grid-cols-4 gap-6 section">
        <Metric title="Total Equity" value="$2000.46" delta="+4.82"/>
        <Metric title="Binance USDT" value="$981.09" delta="-0.02%"/>
        <Metric title="MEXC USDT" value="$1019.37" delta="+0.05%"/>
        <Metric title="Engine Latency" value="16ms" delta="-2ms"/>
      </div>

      <!-- 决策区 -->
      <div class="grid grid-cols-12 gap-6 section">
        <div class="col-span-7 card">
          <div class="h2 mb-1">Real-time Spread Matrix</div>
          <div class="sub mb-4">Cross-exchange spread monitoring</div>
          <ArbTable/>
        </div>

        <div class="col-span-5 card">
          <div class="h2 mb-3">Capital Allocation</div>
          <Capital/>
        </div>
      </div>

      <!-- 日志 -->
      <div class="card">
        <div class="h2 mb-3">System Execution Log</div>
        <Logs/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import SideNav from '../components/SideNav.vue'
import TopBar from '../components/TopBar.vue'
import Metric from '../components/Metric.vue'
import ArbTable from '../components/ArbTable.vue'
import Capital from '../components/Capital.vue'
import Logs from '../components/Logs.vue'
</script>
