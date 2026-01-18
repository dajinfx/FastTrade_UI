<template>
  <aside class="sidebar">
    <div class="brand">
      <div class="title">Risk Control</div>
      <div class="sub">Arbitrage Console</div>
    </div>

    <nav class="menu">
      <div class="item active">Spread Monitor</div>
      <div class="item disabled">Strategy</div>
      <div class="item disabled">Accounts</div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 240px;
  background: #f1f5f9;
  border-right: 1px solid #e2e8f0;
  padding: 20px 16px;
}

.brand {
  margin-bottom: 32px;
}

.title {
  font-size: 18px;
  font-weight: 700;
}

.sub {
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item {
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  color: #475569;
}

.item.active {
  background: #1e293b;
  color: #ffffff;
  font-weight: 600;
}

.item.disabled {
  opacity: 0.4;
}
</style>
