<template>
  <div class="admin-dashboard">
    <nav class="admin-nav">
      <div class="nav-links">
        <router-link to="/admin/products" active-class="active-link">Головна</router-link>
        <router-link to="/admin/reviews" active-class="active-link">Відгуки</router-link>
      </div>
    </nav>
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

.admin-nav {
  background-color: #2c3e50;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: #34495e;
}

.active-link {
  background-color: #1abc9c;
  color: white;
}

.admin-content {
  padding: 30px;
}
</style>
