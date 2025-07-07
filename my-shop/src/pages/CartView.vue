<template>
  <div class="cart-view">
    <h2>🛒 Ваш кошик</h2>
    <div v-if="cart.length === 0">
      <p>Кошик порожній</p>
    </div>
    <ul v-else>
      <li v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" alt="item.name" class="cart-image"/>
        <div>
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} грн</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartView",
  data() {
    return {
      cart: [],
    };
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
  },
};
</script>

<style scoped>
.cart-view {
  max-width: 800px;
  margin: auto;
}

.cart-item {
  display: flex;
  gap: 15px;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cart-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}
</style>
