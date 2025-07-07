<template>
  <div id="app" class="app-container">
    <header class="main-header">
      <h1 class="shop-title">🥿 ТапокShop</h1>
      <div class="cart-info">
        <router-link to="/cart" class="cart-button">
          🛒 Кошик ({{ cartCount }})
        </router-link>
      </div>

      <div class="auth-info">
        <template v-if="authUser">
          Привіт, {{ authUser }}! 
          <button @click="logout" class="logout-button">Вийти</button>
        </template>
        <template v-else>
          <router-link to="/login" class="login-button">Вхід</router-link>
        </template>
      </div>
    </header>

    <nav class="main-nav" v-if="authUser">
      <router-link to="/admin/products" active-class="active-link" class="nav-button">🗂️ Продукти</router-link>
      <router-link to="/admin/reviews" active-class="active-link" class="nav-button">📝 Відгуки</router-link>
      <router-link to="/admin/contact" active-class="active-link" class="nav-button">📞 Контакти</router-link>
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
  components: { FooterComponent },
  data() {
    return {
      cartCount: 0,
      authUser: localStorage.getItem("authUser") || null,
    };
  },
  mounted() {
    this.updateCartCount();
    window.addEventListener("storage", () => {
      this.authUser = localStorage.getItem("authUser");
      this.updateCartCount();
    });
  },
  methods: {
    updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      this.cartCount = cart.length;
    },
    logout() {
      localStorage.removeItem("authUser");
      this.authUser = null;
      this.$router.push("/login");
    },
    updateAuthUser(username) {
      this.authUser = username;
    }
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.updateCartCount);
  },
};
</script>

<style>
/* Тут можна додати свої стилі для меню, кнопок, хедера */

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

.main-header {
  background-color: #3498db;
  padding: 25px 20px 15px;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.shop-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  letter-spacing: 3px;
  margin: 0;
  flex-grow: 1;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  user-select: none;
}

.cart-button, .login-button, .logout-button {
  background-color: #2ecc71;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.cart-button:hover, .login-button:hover, .logout-button:hover {
  background-color: #27ae60;
}

.auth-info {
  white-space: nowrap;
  font-weight: 600;
  color: white;
  user-select: none;
}

.main-nav {
  background-color: #2980b9;
  padding: 15px 0 25px;
  display: flex;
  justify-content: center;
  gap: 25px;
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
</style>
