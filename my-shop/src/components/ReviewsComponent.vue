<template>
  <table>
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
Андрій,5,Обслуговування, як завжди - на висоті
Марина,4,Все чудово! Покупкою задоволена.
Вікторія,5,Дуже задоволена покупкою, дякую за швидку доставку!
Сергій,5,Рекомендую цей чудовий магазин усім!
Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
Анна,5,Дякую за чудові знижки
Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.
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

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>
