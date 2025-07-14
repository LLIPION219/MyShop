<template>
  <div id="app" class="app-container">
    <header class="main-header">
      <h1 class="shop-title">🥿 ТапокShop</h1>
      <div class="header-right">
        <div class="cart-info">
          <router-link to="/cart" class="cart-button">
            🛒 Кошик ({{ cartCount }})
          </router-link>
        </div>
        <div class="auth-info">
          <template v-if="authUser && $route.path !== '/login'">
            Привіт, {{ authUser }}!
            <button @click="logout" class="logout-button">Вийти</button>
          </template>
          <template v-else>
            <router-link to="/login" class="login-button">Вхід</router-link>
          </template>
        </div>
      </div>
    </header>

    <nav class="main-nav" v-if="authUser && $route.path !== '/login'">
      <router-link to="/admin/products" active-class="active-link" class="nav-button">
        📂 {{ menuButtons[0] || "Продукти" }}
      </router-link>
      <router-link to="/admin/reviews" active-class="active-link" class="nav-button">
        📝 {{ menuButtons[1] || "Відгуки" }}
      </router-link>
      <router-link to="/admin/contact" active-class="active-link" class="nav-button">
        📞 {{ menuButtons[2] || "Контакти" }}
      </router-link>
      <router-link to="/admin/panel" active-class="active-link" class="nav-button admin-panel-btn">
        ⚙️ Адмін-панель
      </router-link>
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
      authUser: null,
      menuButtons: [],
    };
  },
  mounted() {
    this.updateCartCount();
    this.authUser = localStorage.getItem("authUser");
    this.loadMenuButtons();
    window.addEventListener("storage", this.handleStorageChange);
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.handleStorageChange);
  },
  watch: {
    "$route.path"() {
      this.authUser = localStorage.getItem("authUser");
      this.loadMenuButtons();
    },
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
    loadMenuButtons() {
      try {
        const stored = JSON.parse(localStorage.getItem("menuButtons"));
        if (Array.isArray(stored) && stored.length === 3) {
          this.menuButtons = stored;
        } else {
          this.menuButtons = ["Продукти", "Відгуки", "Контакти"];
        }
      } catch {
        this.menuButtons = ["Продукти", "Відгуки", "Контакти"];
      }
    },
    handleStorageChange() {
      this.authUser = localStorage.getItem("authUser");
      this.updateCartCount();
      this.loadMenuButtons();
    },
  },
};
</script>

<style>
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

/* ================= HEADER ================= */
.main-header {
  background-color: #3498db;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  flex-shrink: 0;
}

.shop-title {
  font-size: 2.2rem;
  font-weight: 900;
  color: white;
  letter-spacing: 2px;
  margin: 0;
  white-space: nowrap;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.cart-info,
.auth-info {
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}

.cart-button,
.login-button,
.logout-button {
  background-color: #2ecc71;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.cart-button:hover,
.login-button:hover,
.logout-button:hover {
  background-color: #27ae60;
}

/* ================= NAVIGATION ================= */
.main-nav {
  background-color: #2980b9;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.nav-button {
  color: white;
  background-color: #3b82f6;
  padding: 10px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.nav-button:hover,
.nav-button.active-link {
  background-color: #2563eb;
  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.7);
  color: white;
}

.admin-panel-btn {
  background-color: #27ae60;
  box-shadow: 0 4px 8px rgba(39, 174, 96, 0.5);
}

.admin-panel-btn:hover {
  background-color: #219150;
  box-shadow: 0 6px 12px rgba(33, 145, 80, 0.7);
}

/* ================= MAIN CONTENT ================= */
.main-content {
  flex: 1;
  padding: 30px 20px;
  background-color: #ecf0f1;
  min-height: 300px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  max-width: 1200px;
  margin: 20px auto 40px;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 768px) {
  .main-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .header-right {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .shop-title {
    font-size: 1.8rem;
  }

  .nav-button {
    font-size: 0.95rem;
    padding: 8px 18px;
  }
}
</style>
