import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
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
