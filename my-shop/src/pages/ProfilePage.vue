<template>
  <div>
    <h2>Адмін-панель</h2>
    <p>Вітаємо, {{ username }}!</p>

    <div v-if="userLoaded" class="profile-info">
      <img v-if="photo" :src="photo" alt="Фото користувача" class="profile-photo" />
      <p><strong>Ім'я:</strong> {{ name }}</p>
      <p><strong>Роль:</strong> {{ role }}</p>
      <p><strong>Телефон:</strong> {{ phone }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>

    <button @click="logout">Вийти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem("authUser") || "",
      name: "",
      role: "",
      phone: "",
      email: "",
      photo: "",
      userLoaded: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("authUser");
      this.$router.push("/login");
    }
  },
  async beforeMount() {
    if (!this.username) {
      this.$router.push("/login");
      return;
    }

    try {
      const res = await fetch("/admin.json");
      if (!res.ok) throw new Error("Не вдалося завантажити admin.json");

      const users = await res.json();
      const currentUser = users.find(user => user.username === this.username);

      if (currentUser) {
        this.name = currentUser.name || "";
        this.role = currentUser.role || "";
        this.phone = currentUser.phone || "";
        this.email = currentUser.email || "";
        this.photo = currentUser.photo || "";
      }
      this.userLoaded = true;
    } catch (e) {
      console.error(e);
      this.userLoaded = false;
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

.profile-photo {
  width: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
  display: block;
}

.profile-info p {
  margin: 5px 0;
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
  margin-top: 20px;
}

button:hover {
  background-color: #c0392b;
}
</style>
