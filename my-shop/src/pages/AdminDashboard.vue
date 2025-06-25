<template>
  <div class="admin-dashboard">
    <main class="admin-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard'
}
</script>

<style scoped>
.admin-dashboard {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.admin-content {
  padding: 30px;
}
</style>
