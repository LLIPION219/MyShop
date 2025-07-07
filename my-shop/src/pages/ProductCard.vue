<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h3>{{ name }}</h3>
    <p class="price">{{ price }} грн</p>
    <button @click="addToCart">Купити</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: String,
    price: Number,
    image: String,
  },
  methods: {
    addToCart() {
      const product = {
        name: this.name,
        price: this.price,
        image: this.image,
      };
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`Додано в кошик: ${this.name}`);
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 220px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.02);
}

.product-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.price {
  font-weight: bold;
  margin: 10px 0;
}

button {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #218838;
}
</style>
