import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'login', component: Login },
        { path: '/home', name: 'home', component: Home },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import('../views/AboutView.vue')
        // }
    ],
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const token = window.sessionStorage.getItem('token')
    if (!token) return next('/login')
    next()
})

export default router
