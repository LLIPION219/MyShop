<template>
  <div class="product-list-wrapper">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="🔍 Пошук товарів..."
      class="search-input"
    />

    <div class="product-list">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      searchQuery: "",
      products:
        JSON.parse(localStorage.getItem("products")) || [
          {
            id: 1,
            name: "Смартфон Samsung Galaxy S23",
            price: 35000,
            image:
              "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg",
          },
          {
            id: 2,
            name: "Ноутбук Apple MacBook Air M2",
            price: 58000,
            image:
              "https://img.freepik.com/free-photo/workplace-with-laptop-stand-near-eyeglasses_23-2148040478.jpg",
          },
          {
            id: 3,
            name: "Бездротові навушники Sony",
            price: 7800,
            image:
              "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg",
          },
          {
            id: 4,
            name: "Механічна клавіатура HyperX",
            price: 4500,
            image:
              "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg",
          },
          {
            id: 5,
            name: "Смарт-годинник Apple Watch Series 9",
            price: 17000,
            image:
              "https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg",
          },
          {
            id: 6,
            name: "Портативна колонка JBL Series 1",
            price: 5200,
            image:
              "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg",
          },
          {
            id: 7,
            name: "Телевізор Samsung 4K QLED",
            price: 28000,
            image:
              "https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg",
          },
          {
            id: 8,
            name: "Фітнес-браслет Xiaomi Mi Band 7",
            price: 1800,
            image:
              "https://img.freepik.com/free-photo/futuristic-virtual-reality-headset-illuminates-dark-studio-shot-generated-by-ai_188544-13298.jpg",
          },
        ],
    };
  },
  computed: {
    filteredProducts() {
      const query = this.searchQuery.toLowerCase();
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    },
  },
  watch: {
    products: {
      handler(newProducts) {
        localStorage.setItem("products", JSON.stringify(newProducts));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.product-list-wrapper {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border 0.2s ease;
}

.search-input:focus {
  border-color: #007bff;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-list > * {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-list > *:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 123, 255, 0.2);
}
</style>
