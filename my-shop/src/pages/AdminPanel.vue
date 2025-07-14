<template>
  <div class="admin-panel">
    <h2>Адмін-панель — Редагування</h2>

    <section>
      <h3>Редагувати назви кнопок меню</h3>
      <div v-for="(btn, index) in menuButtons" :key="index">
        <input v-model="menuButtons[index]" />
      </div>
      <button @click="saveMenu">Зберегти назви меню</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuButtons:
        JSON.parse(localStorage.getItem("menuButtons")) || [
          "Продукти",
          "Відгуки",
          "Контакти",
        ],
    };
  },
  methods: {
    saveMenu() {
      localStorage.setItem("menuButtons", JSON.stringify(this.menuButtons));
      alert("Назви меню збережено");
      this.$router.push("/admin/products");
    },
  },
};
</script>

<style scoped>
.admin-panel {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 1rem;
}
button {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #219150;
}
</style>
