<template>
    <div class="users_container">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="'/home'">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图 -->
        <el-card class="box-card">
            <!-- 搜索与添加 -->
            <el-row :gutter="20">
                <el-col :span="9">
                    <el-input placeholder="请输入内容">
                        <template #append>
                            <el-icon>
                                <Search />
                            </el-icon>
                        </template>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>
            <!-- 用户列表 -->
            <el-table :data="userList" border stripe>
                <el-table-column label="姓名" prop="username" />
                <el-table-column label="邮箱" prop="email" />
                <el-table-column label="电话" prop="mobile" />
                <el-table-column label="角色" prop="role_name" />
                <el-table-column label="状态" prop="mg_state" />
                <el-table-column label="操作" />
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Users',
    data() {
        return {
            queryInfo: {
                query: '',
                pagenum: 1,
                pagesize: 2,
            },
            userList: [],
            total: 0
        }
    },
    methods: {
        async getUserList() {
            // const { data: res } = await this.$http.get('users', { params: this.queryInfo })
            const res = this.$store.state.res_user
            if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
            this.userList = res.data.users
            this.total = res.data.total
            console.log(res);
        }
    },
    created() {
        this.getUserList()
    }
}
</script>

<style lang="less" scoped>
.users_container {
    height: 100%;
}

.el-breadcrumb {
    margin-bottom: 20px;
    font-size: 12px;
}

.el-card {
    // height: calc(100% - 40px);
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.15);

    .el-table {
        margin-top: 20px;
        font-size: 14px;
    }
}
</style>