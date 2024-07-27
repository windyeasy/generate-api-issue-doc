import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/preview',
      component: () => import('@/views/preview/index.vue'),
    },
  ],
  history: createWebHashHistory(),
})
