import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('@/pages/Home');

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Home },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});
/* router.beforeEach((to, from, next) => {
  next();
}); */

export default router;
