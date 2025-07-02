import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';
import ContactComponent from './pages/ContactComponent.vue';

const routes = [
  {
    path: '/',
    component: AdminDashboard,
    children: [
      { path: '', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
    ],
  },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: 'products', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
      { path: 'contact', component: ContactComponent }, // ✅ переміщено сюди
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/my-shop/'),
  routes,
});

export default router;
