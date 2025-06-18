<template>
  <div id="app">
    <ProductList />
    <ReviewsComponent />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import ReviewsComponent from "@/components/ReviewsComponent.vue";

export default {
  name: 'App',
  components: {
    ProductList,
    ReviewsComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
