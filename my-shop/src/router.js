import { createRouter, createWebHistory } from 'vue-router';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';
import ContactComponent from './pages/ContactComponent.vue';
import CartView from './pages/CartView.vue';
import LoginPage from './pages/LoginPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import AdminDashboard from './pages/AdminDashboard.vue';
import AdminPanel from './pages/AdminPanel.vue'; // <-- імпорт адмін панелі

const routes = [
  { path: '/', redirect: '/admin/products' },

  { path: '/admin', component: AdminDashboard },

  { path: '/admin/products', component: ManageProducts },
  { path: '/admin/reviews', component: ManageReviews },
  { path: '/admin/contact', component: ContactComponent },
  { path: '/admin/panel', component: AdminPanel },  // <-- маршрут для адмін панелі

  { path: '/cart', component: CartView },
  { path: '/login', component: LoginPage },
  { path: '/profile', component: ProfilePage },

  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory('/my-shop/'), // або '/' залежно від проєкту
  routes,
});

export default router;
