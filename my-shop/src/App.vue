<template>
  <div id="app" class="app-container">
    <header class="main-header">
      <h1 class="shop-title">🥿 ТапокShop</h1>
    </header>

    <nav class="main-nav">
      <router-link to="/admin/products" active-class="active-link" class="nav-button">🗂️ Продукти</router-link>
      <router-link to="/admin/reviews" active-class="active-link" class="nav-button">📝 Відгуки</router-link>
      <router-link to="/contact" active-class="active-link" class="nav-button">📞 Контакти</router-link>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
  },
};
</script>

<style>
/* Контейнер сторінки — flexbox по вертикалі, мінімальна висота 100vh */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafd;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Шапка - заголовок по центру, стильний */
.main-header {
  background-color: #3498db;
  padding: 25px 20px 15px;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.shop-title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  letter-spacing: 3px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0;
}

/* Навігація — кнопки по центру з відступом */
.main-nav {
  background-color: #2980b9;
  padding: 15px 0 25px;
  display: flex;
  justify-content: center;
  gap: 25px; /* відстань між кнопками */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.nav-button {
  color: white;
  background-color: #3b82f6;
  padding: 10px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.nav-button:hover,
.nav-button.active-link {
  background-color: #2563eb;
  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.7);
  text-decoration: none;
  color: white;
  cursor: pointer;
}

/* Основний контент займає весь вільний простір */
.main-content {
  flex: 1;
  padding: 30px 20px;
  background-color: #ecf0f1;
  min-height: 300px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
  border-radius: 10px;
  max-width: 1200px;
  margin: 20px auto 40px;
}

/* Футер "прилипає" до низу сторінки */
footer {
  background-color: #2c3e50;
  color: #bdc3c7;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  margin-top: auto; /* ключова властивість для sticky footer */
  box-shadow: 0 -2px 5px rgba(0,0,0,0.15);
}
</style>
