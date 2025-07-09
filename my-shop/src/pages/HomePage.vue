<template>
  <div class="home-container">
    <h1>Ласкаво просимо до ТапокShop 👟</h1>
    <p>Це головна сторінка. Для доступу до адмін-панелі потрібно увійти.</p>
    <router-link to="/login">
      <button class="login-btn">Перейти до входу</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 80px;
  font-family: 'Segoe UI', sans-serif;
}

.login-btn {
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #3498db;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

.login-btn:hover {
  background-color: #2980b9;
}
</style>
