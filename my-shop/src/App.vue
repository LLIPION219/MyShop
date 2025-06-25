<template>
  <div id="app">
    <!-- Хедер -->
    <header class="main-header">
      <h1>🥿 ТапокShop</h1>
    </header>

    <!-- Навігація -->
    <nav class="main-nav">
      <router-link to="/admin/products" active-class="active-link">🗂️ Продукти</router-link>
      <router-link to="/admin/reviews" active-class="active-link">📝 Відгуки</router-link>
    </nav>

    <!-- Основна частина -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f7fa;
}

/* Хедер */
.main-header {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.main-header h1 {
  font-size: 32px;
  margin: 0;
}

/* Навігація */
.main-nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: #34495e;
  padding: 15px 0;
}

.main-nav a {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.main-nav a:hover {
  background-color: #1abc9c;
  color: white;
}

.active-link {
  background-color: #1abc9c;
  color: white;
}

/* Основний контент */
.main-content {
  padding: 30px;
  min-height: 70vh;
}
</style>
