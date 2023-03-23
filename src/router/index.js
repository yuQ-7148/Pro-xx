import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import User from '../components/user/users.vue'
import SystemBI from '../components/systemBI/systemBI.vue'
import RLBZFX from '../components/rlbzfx/rlbzfx.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'login', component: Login },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/welcome',
            children: [
                { path: '/welcome', component: Welcome },
                { path: '/users', component: User },
                { path: '/systembi', component: SystemBI },
            ]
        },
        { path: '/rlbzfx', name: 'rlbzfx', component: RLBZFX },
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
