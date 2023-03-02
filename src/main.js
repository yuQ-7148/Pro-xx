import { createApp } from 'vue'
import App from './App.vue'
//导入
// import './style.css'
import router from './router/index.js'
import { createStore } from 'vuex'

const app = createApp(App)
const store = createStore({
    state() {
        // return()
    },
    // getters: {},
    // mutations: {},
    // actions: {},
    // modules: {}
})

//挂载
app.use(router)
app.use(store)

app.mount('#app')
