<template>
  <div class="reviews-page">
    <h2>📝 Відгуки наших клієнтів</h2>
    <p>Ми цінуємо вашу думку! Тут ви можете переглянути, що кажуть інші про наші товари.</p>
    
    <div class="input-wrapper">
      <input v-model="message" type="text" placeholder="Напиши тут щось..." />
      <p>Ти написав: {{ message }}</p>
    </div>
    
    <div class="reviews-table-wrapper">
      <ReviewsComponent />
    </div>
  </div>
</template>

<script>
import ReviewsComponent from '../components/ReviewsComponent.vue';

export default {
  components: {
    ReviewsComponent,
  },
  data() {
    return {
      message: '',
    };
  },
};
</script>

<style scoped>
.reviews-page {
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  max-width: 900px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.reviews-page h2 {
  margin-bottom: 10px;
  font-size: 28px;
  color: #2c3e50;
}

.reviews-page p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
}

.input-wrapper {
  margin-bottom: 25px;
}

.input-wrapper input {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-wrapper input:focus {
  border-color: #409eff;
}

.input-wrapper p {
  margin-top: 8px;
  font-size: 16px;
  color: #333;
  font-style: italic;
}

.reviews-table-wrapper {
  overflow-x: auto;
  max-width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #f9f9f9;
}
</style>
