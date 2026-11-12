import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/cart',
        component: () => import('../views/CartView.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router