<template>
    <el-container>
        <!-- 头部 -->
        <el-header>
            <div>
                <img src="../assets/images/logo.png" alt="">
                <span>学习平台报表平台</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主体 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="this.isCollapse ? '100px' : '200px'">
                <!-- 菜单折叠按钮 -->
                <div class="toggle-button" @click="this.isCollapse = !this.isCollapse">|||</div>
                <!-- 菜单区域 -->
                <el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff" :unique-opened="true"
                    :collapse="isCollapse" :collapse-transition="false" :router="true" :default-active="activePath">
                    <el-sub-menu v-for="item in this.menuList" :key="item.id" :index="item.id.toString()">
                        <template #title>{{ item.authName }}</template>
                        <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path"
                            @click="saveNavState(subItem.path)">
                            {{ subItem.authName }}
                        </el-menu-item>
                    </el-sub-menu>

                </el-menu>
            </el-aside>
            <!-- 内容主体 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            isCollapse: false,
            menuList: [],
            activePath: ''
            // iconObj: {
            //     '1': 'User',
            //     '101': '',
            //     '2': '',
            //     '201': '',
            //     '202': '',
            //     '3': '',
            //     '4': '',
            //     '5': '',
            //     '6': '',
            // }
        }
    },
    methods: {
        logout() {
            window.sessionStorage.clear()
            this.$router.push('/login')
        },
        getMenuList() {
            // const { data: res } = this.$http.get('menus')
            const res = this.$store.state.res_1
            if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
            this.menuList = res.data
            // console.log(res);
        },
        saveNavState(activePath) {
            window.sessionStorage.setItem('activePath', activePath)
            this.activePath = window.sessionStorage.getItem('activePath')
        }
    },
    created() {
        this.getMenuList()
        this.activePath = window.sessionStorage.getItem('activePath')
    },
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
    color: #ffffff;
    font-size: 25px;

    div {
        height: 100%;
        display: flex;
        align-items: center;

        img {
            height: 100%;
        }

        span {
            margin-left: 15px;
        }
    }

    .el-button {
        display: inline-block;
        align-items: center;
        height: 36px;
        font-size: 17px;
    }
}

.el-aside {
    background-color: #333744;

    .toggle-button {
        background-color: #4a5064;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }

    .el-menu {
        border: none;
    }
}
</style>