import { createApp } from 'vue'
import App from './App.vue'
//导入-----------------------------------------------------------------------------------
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

//Store
const store = createStore({
    state() {
        return {
            //假登录数据
            res: {
                data: {
                    token: 'Bearer xxx',
                },
                meta: {
                    status: 200,
                },
            },
            res_1: {
                data: [
                    {
                        id: 1,
                        authName: '用户管理',
                        children: [
                            {
                                id: 101,
                                authName: '用户列表'
                            }
                        ]
                    },
                    {
                        id: 2,
                        authName: '权限管理',
                        children: [
                            {
                                id: 201,
                                authName: '角色列表'
                            },
                            {
                                id: 202,
                                authName: '权限列表'
                            }
                        ]
                    },
                    {
                        id: 3,
                        authName: '学习平台',
                    },
                    {
                        id: 4,
                        authName: 'HR',
                    },
                    {
                        id: 5,
                        authName: '云星空',
                    },
                    {
                        id: 6,
                        authName: '智能审批',
                    },
                ],
                meta: {
                    status: 200,
                    msg: '登录成功',
                },
            }
        }
    },
    // getters: {},
    // mutations: {},
    // actions: {},
    // modules: {}
})

//挂载-------------------------------------------------------------------------------------
app.use(router)
app.use(store)

app.mount('#app')
