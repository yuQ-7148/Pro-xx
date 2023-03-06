<template>  
    <el-container>
        <!-- 头部 -->
        <el-header>
            <div>
                <img src="../assets/images/logo.png" alt="">
                <span>前端项目框架搭建</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主体 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="200px">Aside</el-aside>
            <!-- 内容主体 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        logout() {
            window.sessionStorage.clear()
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped>
.el-container {
    height: 100%;
}

.el-header {
    background-color: #373d14;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 25px;
    div{
        height: 100%;
        display: flex;
        align-items: center;
        img{
            height: 100%;
        }
        span{
            margin-left: 15px;
        }
    }
    .el-button{
        display: inline-block;
        align-items: center;
        height: 36px;
        font-size: 17px;
    }
}

.el-aside {
    background-color: #333744;
}
</style>