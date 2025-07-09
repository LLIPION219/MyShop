<template>
  <div class="dashboard">
    <h2>Адмін Панель</h2>

    <!-- Додай посилання -->
    <router-link to="/login" class="cabinet-link">Особистий кабінет</router-link>
  </div>
</template>

<style scoped>
.cabinet-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 18px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s ease;
}
.cabinet-link:hover {
  background-color: #2980b9;
}
</style>
