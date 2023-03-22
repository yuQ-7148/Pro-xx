import { createApp } from 'vue'
import App from './App.vue'
//导入-----------------------------------------------------------------------------------
import './assets/css/global.css'
// import './assets/fonts/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index.js'
import { createStore } from 'vuex'
import axios from 'axios'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
axios.defaults.baseURL = 'http://42.192.58.33:6688'
app.config.globalProperties.$http = axios
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
                                authName: '用户列表',
                                path: 'users'
                            }
                        ]
                    },
                    {
                        id: 2,
                        authName: '权限管理',
                        children: [
                            {
                                id: 201,
                                authName: '角色列表',
                                path: 'character'
                            },
                            {
                                id: 202,
                                authName: '权限列表',
                                path: 'limitList'
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
                    {
                        id: 7,
                        authName: '系统BI',
                        children: [
                            {
                                id: 701,
                                authName: '系统BI',
                                path: 'systembi'
                            },
                            {
                                id: 702,
                                authName: '人力编制分析',
                                path: 'rlbzfx'
                            },
                        ]
                    },
                ],
                meta: {
                    status: 200,
                    msg: '登录成功',
                },
            },
            res_user: {
                data: {
                    pagenum: 1,
                    total: 5,
                    users: [
                        {
                            id: '25',
                            role_name: '超级管理员',
                            username: 'admin',
                            type: 1,
                            email: '1341155745@qq.com',
                            mobile: '16134242448',
                            mg_state: true
                        },
                        {
                            id: '26',
                            role_name: '超级管理员',
                            username: 'qerqer',
                            type: 1,
                            email: '3343434745@qq.com',
                            mobile: '16813424110',
                            mg_state: false
                        },
                    ]
                },
                meta: {
                    status: 200,
                    msg: '获取管理员列表成功'
                }
            },
            res_addUser: {
                meta: {
                    status: 201,
                    msg: '用户添加成功'
                }
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
app.use(ElementPlus, {
    locale: zhCn,
  })

app.mount('#app')
