import axios from '../request/axios';
//添加分类
function getUserList_(data){
    return axios.get('/shr/getAllUsers',data)
}export{
    getUserList_ as getUserList,
}