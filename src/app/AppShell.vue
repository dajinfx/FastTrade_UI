<template>
  <div class="h-screen flex flex-col bg-bg text-text">
    <!-- Top Bar -->
    <header class="h-10 border-b border-border flex items-center px-4 text-sm">
      <span class="text-muted">FastTrade Monitor</span>
    </header>

    <div class="flex flex-1 overflow-hidden">
      <!-- Side Nav -->
      <aside class="w-52 border-r border-border p-3 text-sm text-muted">
        <div class="mb-2">Arbitrage</div>
        <div class="mb-2">Orderbook</div>
        <div class="mb-2">Capital</div>
        <div class="mb-2">Logs</div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-4 overflow-auto">
        <div class="text-muted">
          System Ready · Waiting for data
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
