<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="'/home'">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图 -->
        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="9">
                    <!-- 搜索与添加 -->
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
            }
        }
    },
    methods: {
        async getUserList() {
            const { data: res } = await this.$http.get('users', { params: this.queryInfo })
            console.log(res);
        }
    },
    created() {
        this.getUserList()
    }
}
</script>

<style lang="less" scoped>
.el-breadcrumb {
    margin-bottom: 20px;
    font-size: 12px;
}

.el-card {
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.15);
}
</style>