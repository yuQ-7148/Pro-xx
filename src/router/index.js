import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'
import Login from '../components/login/login.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'login', component: Login },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import('../views/AboutView.vue')
        // }
    ]
})

// router.beforeEach((to, from, next) => {
//     next()
// })

export default router
