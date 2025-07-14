<template>
  <div class="reviews-page">
    <h2>📝 Відгуки наших клієнтів</h2>
    <p>Ми цінуємо вашу думку! Тут ви можете переглянути, що кажуть інші про наші товари.</p>

    <div class="filter-wrapper">
      <label for="ratingFilter">Фільтрувати за оцінкою:</label>
      <select id="ratingFilter" v-model="selectedRating">
        <option value="">Усі</option>
        <option v-for="n in 5" :key="n" :value="n">{{ n }} зірок</option>
      </select>
    </div>

    <div class="input-wrapper">
      <input v-model="message" type="text" placeholder="Напиши тут щось..." />
      <p>Ти написав: {{ message }}</p>
    </div>

    <div class="reviews-table-wrapper">
      <ul>
        <li v-for="review in filteredReviews" :key="review.id">
          <strong>{{ review.author }}:</strong> {{ review.text }} — {{ review.rating }}⭐
        </li>
        <li v-if="filteredReviews.length === 0">Відгуки не знайдені для обраної оцінки.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      selectedRating: '',
      reviews: [
        { id: 1, author: 'Олена', text: 'Чудовий товар!', rating: 5 },
        { id: 2, author: 'Петро', text: 'Непогано, але можна краще', rating: 3 },
        { id: 3, author: 'Марія', text: 'Не сподобалося', rating: 1 },
        { id: 4, author: 'Ігор', text: 'Якість відмінна', rating: 4 },
        { id: 5, author: 'Світлана', text: 'Ціна занадто висока', rating: 2 },
      ],
    };
  },
  computed: {
    filteredReviews() {
      if (!this.selectedRating) return this.reviews;
      return this.reviews.filter(r => r.rating === Number(this.selectedRating));
    },
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

.filter-wrapper {
  margin-bottom: 20px;
}

.filter-wrapper label {
  margin-right: 10px;
  font-weight: 600;
}

.filter-wrapper select {
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
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

.reviews-table-wrapper ul {
  list-style: none;
  padding: 0;
}

.reviews-table-wrapper li {
  padding: 8px 5px;
  border-bottom: 1px solid #ddd;
}
</style>
