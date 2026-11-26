
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tentang',
      name: 'about',
      component: AboutView
    },
    {
      path: '/proyek',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/proyek/:id',
      name: 'project-detail',
      component: ProjectDetailView
    },
    {
      path: '/kontak',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
