<template>
  <div class="contact-page">
    <h2>📞 Звʼяжіться з нами</h2>
    <p>Маєш питання або ідеї? Напиши!</p>
    <ul>
      <li><strong>Email:</strong> tapok@shop.ua</li>
      <li><strong>Телефон:</strong> +38 (066) 123-45-67</li>
      <li><strong>Ми в TikTok:</strong> @tapokshop_official</li>
    </ul>

    <h3>Наші години роботи</h3>
    <p>Понеділок - Пʼятниця: 9:00 - 18:00</p>
    <p>Субота: 10:00 - 16:00</p>
    <p>Неділя: Вихідний</p>

    <h3>Адреса магазину</h3>
    <p>м. Київ, вул. Тапкова, 10</p>

    <h3>Соціальні мережі</h3>
    <p>Підписуйся на наш Instagram, Facebook та TikTok, щоб не пропустити новинки та акції!</p>

    <h3>Форма зворотного зв’язку</h3>
    <p>Незабаром тут з’явиться форма, щоб ти міг безпосередньо написати нам!</p>

    <p class="contact-thanks">Ми цінуємо кожен ваш відгук та звернення 💌</p>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>

<style scoped>
.contact-page {
  max-width: 800px;
  margin: 30px auto;
  padding: 40px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  font-size: 15px;
  color: #333;
}

.contact-page h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 26px;
}

.contact-page h3 {
  margin-top: 25px;
  color: #444;
  font-size: 18px;
}

.contact-page ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.contact-page li {
  margin-bottom: 10px;
  font-size: 15px;
}

.contact-thanks {
  margin-top: 40px;
  text-align: center;
  font-style: italic;
  color: #555;
}
</style>
