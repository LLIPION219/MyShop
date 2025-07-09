<template>
  <div>
    <h2>Адмін-панель</h2>
    <p>Вітаємо, {{ username }}!</p>
    <button @click="logout">Вийти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem("authUser") || ""
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("authUser");
      this.$router.push("/");
    }
  },
  beforeMount() {
    if (!this.username) {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #34495e;
}

button {
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #c0392b;
}
</style>
