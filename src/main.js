import { createApp } from 'vue'
import App from './App.vue'
//导入
import './assets/css/global.css'
// import './assets/fonts/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index.js'
import { createStore } from 'vuex'
import axios from 'axios'

// axios.defaults.baseURL = ''
// Vue.prototype.$http = axios
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const store = createStore({
    state() {
        return {
            //假登录数据
            res: {
                data: {
                    meta: {
                        status: 200,
                    },
                    token: 'Bearer xxx'
                }
            }
        }
    }
    // getters: {},
    // mutations: {},
    // actions: {},
    // modules: {}
})

//挂载
app.use(router)
app.use(store)

app.mount('#app')
