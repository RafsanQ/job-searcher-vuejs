import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/jobspage',
      name: 'jobspage',
      // route level code-splitting
      component: () => import('../views/Jobs/JobsPage.vue')
    },
    {
      path: '/jobspage/:id',
      name: 'jobsDetails',
      // route level code-splitting
      component: () => import('../views/Jobs/JobDetails.vue')
    },

    // Redirect
    {
      path: '/all-jobs',
      redirect: '/jobspage'
    }
  ]
})

export default router
