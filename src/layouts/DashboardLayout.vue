<template>
  <div class="h-screen flex bg-slate-900 text-slate-200">
    <!-- 左侧导航 -->
    <SideNav />

    <!-- 右侧主区域 -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- 顶部状态栏 -->
      <TopBar />

      <!-- 主内容区 -->
      <main class="flex-1 p-4 grid grid-cols-12 gap-4 overflow-auto">
        <!-- 套利表（主角） -->
        <section class="col-span-8 bg-slate-800 rounded-lg p-3">
          <ArbitrageTable />
        </section>

        <!-- 右侧面板 -->
        <section class="col-span-4 flex flex-col gap-4">
          <div class="bg-slate-800 rounded-lg p-3">
            <CapitalPanel />
          </div>

          <div class="bg-slate-800 rounded-lg p-3 flex-1 overflow-auto">
            <OrderbookPanel />
          </div>
        </section>

        <!-- 日志 -->
        <section class="col-span-12 bg-slate-800 rounded-lg p-3 h-48 overflow-auto">
          <LogPanel />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideNav from '@/components/SideNav.vue'
import TopBar from '@/components/TopBar.vue'
import ArbitrageTable from '@/components/ArbitrageTable.vue'
import OrderbookPanel from '@/components/OrderbookPanel.vue'
import CapitalPanel from '@/components/CapitalPanel.vue'
import LogPanel from '@/components/LogPanel.vue'
</script>
