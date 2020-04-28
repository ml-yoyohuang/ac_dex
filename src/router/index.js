import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('@/pages/Home');
const Music = () => import('@/pages/Music');

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: Home },
  { path: '/fossil', component: Home },
  { path: '/music', component: Music },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});
/* router.beforeEach((to, from, next) => {
  next();
}); */

export default router;
