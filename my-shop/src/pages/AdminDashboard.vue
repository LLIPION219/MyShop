<template>
  <div>
    <nav>
      <router-link to="/admin/products" active-class="active-link">Головна</router-link>
      <router-link to="/admin/reviews" active-class="active-link">Відгуки</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard'
}
</script> 