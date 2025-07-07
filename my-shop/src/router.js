import { createRouter, createWebHistory } from 'vue-router';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';
import ContactComponent from './pages/ContactComponent.vue';
import CartView from './pages/CartView.vue';
import LoginPage from './pages/LoginPage.vue';

// Якщо хочеш, пізніше можна додати ProfilePage
// import ProfilePage from './pages/ProfilePage.vue';

const routes = [
  { path: '/', redirect: '/admin/products' },

  // Основні сторінки адмінки
  { path: '/admin/products', component: ManageProducts },
  { path: '/admin/reviews', component: ManageReviews },
  { path: '/admin/contact', component: ContactComponent },

  // Кошик
  { path: '/cart', component: CartView },

  // Логін
  { path: '/login', component: LoginPage },

  // Профіль (якщо зробиш окрему сторінку)
  // { path: '/profile', component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory('/my-shop/'), // або '/' залежно від базового шляху
  routes,
});

export default router;
