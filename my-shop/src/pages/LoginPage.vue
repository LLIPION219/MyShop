<template>
  <div class="login-container">
    <h2>Авторизація</h2>
    <input v-model="username" placeholder="Введіть логін" />
    <input v-model="password" type="password" placeholder="Пароль" />
    <button @click="login">Увійти</button>
    <p v-if="message" class="error">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
      users: [
        { username: "admin", password: "12345" },
        { username: "user", password: "qwerty" }
      ],
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.message = "Введіть логін та пароль!";
        return;
      }

      const user = this.users.find(function (u) {
        return u.username === this.username && u.password === this.password;
      }.bind(this));

      if (user) {
        localStorage.setItem("authUser", this.username);


        this.$router.push("/admin/products");
      } else {
        this.message = "Невірний логін або пароль!";
      }
    }
  }
};
</script>

<style scoped>
/* ... стилі як були ... */
.login-container {
  max-width: 360px;
  margin: 60px auto;
  padding: 30px 25px;
  background: #ffffff;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h2 {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 15px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
}

input {
  padding: 12px 15px;
  font-size: 16px;
  border: 2px solid #2980b9;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 8px #3498db;
}

button {
  background-color: #3498db;
  color: white;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 5px 12px rgba(52, 152, 219, 0.6);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #2980b9;
  box-shadow: 0 6px 16px rgba(41, 128, 185, 0.8);
}

.error {
  color: #e74c3c;
  font-weight: 700;
  text-align: center;
  font-size: 1rem;
  user-select: none;
}
</style>
