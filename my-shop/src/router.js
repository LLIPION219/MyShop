import { createRouter, createWebHistory } from 'vue-router';

import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';
import ContactComponent from './pages/ContactComponent.vue';
import CartView from './pages/CartView.vue';
import LoginPage from './pages/LoginPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import HomePage from './pages/HomePage.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  // Головна сторінка
  { path: '/', component: HomePage },

  // Адмін-панель (захищена сторінка)
  { path: '/profile', component: ProfilePage },

  // Основні сторінки адмінки
  { path: '/admin/products', component: ManageProducts },
  { path: '/admin/reviews', component: ManageReviews },
  { path: '/admin/contact', component: ContactComponent },

  // Кошик
  { path: '/cart', component: CartView },

  // Логін
  { path: '/login', component: LoginPage },

  // Сторінка 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory('/my-shop/'), // або '/' якщо не в підкаталозі
  routes,
});

// Глобальний захист маршруту (опціонально)
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('authUser');

  if (authRequired && !loggedIn && to.path.startsWith('/admin')) {
    return next('/login');
  }

  next();
});

export default router;
