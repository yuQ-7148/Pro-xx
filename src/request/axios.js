import axios from 'axios';

//设置axios
const service=axios.create({
    timeout:1000*60,
    baseURL:'http://42.192.58.33:6688',//对axios发送的请求路径进行集中设置
    //意思是在接口路径前加上/api
    //这里的 /api 是和vue.config.js中proxy 中设置的对应
})

//封装post请求
let post=function(url,data_={}){
    return new Promise((resolve,reject)=>{
        service.post(url,data_).then((res)=>{
            return resolve(res)
        }).catch((err)=>{
            return reject(err)
        })
    })
}

//封装get请求
let get=function(url,params){
    return new Promise((resolve,reject)=>{
        service.get(url,{params}).then((res)=>{
            return resolve(res)
        }).catch((err)=>{
            return reject(err)
        })
    })
}

//请求拦截
service.interceptors.request.use(config=>{
    //添加请求头
    config.headers={
        "Authorization":localStorage.token
    }
    return config
},err=>{
    return Promise.reject(err)
})

//添加响应拦截
service.interceptors.response.use(res=>{
    return res.data
},err=>{
    return err
})

export default{
    post,
    get
}