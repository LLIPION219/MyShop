<template>
  <div class="reviews-wrapper">
    <table class="reviews-table">
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Рейтинг</th>
          <th>Коментар</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(review, index) in reviews" :key="index">
          <td>{{ review.Name }}</td>
          <td>{{ review.Rating }}</td>
          <td>{{ review.Comment }}</td>
        </tr>
      </tbody>
    </table>

    <p class="reviews-note">Дякуємо всім клієнтам за щирі відгуки! 💙 Ми ростемо завдяки вам.</p>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  data() {
    return {
      reviews: [],
    };
  },
  created() {
    const csvContent = `
Name,Rating,Comment
Іван,5,Дякую за швидку доставку
Ольга,5,Все супер! Буду замовляти ще
Андрій,5,Обслуговування
Марина,4,Все чудово! Покупкою задоволена.
Вікторія,5,Дуже задоволена покупкою
Сергій,5,Рекомендую цей чудовий магазин усім!
Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
Анна,5,Дякую за чудові знижки
Раймонд,4,Як завжди все кльово
    `.trim();

    Papa.parse(csvContent, {
      header: true,
      complete: (result) => {
        this.reviews = result.data;
      },
    });
  },
};
</script>

<style scoped>
.reviews-wrapper {
  max-width: 800px;
  margin: auto;
  padding: 0;
  background: transparent;
  box-shadow: none;
  border: none;
}

.reviews-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  border: none;
}

.reviews-table th,
.reviews-table td {
  padding: 8px;
  text-align: left;
  border: none !important;
  background: transparent;
}

.reviews-table th {
  font-weight: bold;
  color: #333;
}

.reviews-note {
  margin-top: 20px;
  font-style: italic;
  color: #555;
  text-align: center;
  border: none;
  background: none;
  box-shadow: none;
}
</style>
