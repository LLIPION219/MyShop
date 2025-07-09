<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Ой! Такої сторінки не існує.</p>
    <router-link to="/">
      <button>На головну</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  font-size: 5rem;
  color: #e74c3c;
}

p {
  font-size: 1.5rem;
  margin: 20px 0;
}

button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #27ae60;
}
</style>
