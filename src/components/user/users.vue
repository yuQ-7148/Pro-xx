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
                    <el-input placeholder="请输入内容"
                              v-model="queryInfo.query"
                              clearable @clear="getUserList()"
                              @keyup.enter="getUserList()">
                        <template #append>
                            <el-button @click="getUserList()">
                                <el-icon>
                                    <Search />
                                </el-icon>
                            </el-button>
                        </template>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="changeDialogVisible()">添加用户</el-button>
                </el-col>
            </el-row>
            <!-- 用户列表 -->
            <el-table :data="userList" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column label="姓名" prop="username"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="电话" prop="mobile"></el-table-column>
                <el-table-column label="角色" prop="role_name"></el-table-column>
                <el-table-column label="状态" prop="mg_state">
                    <template #default="scope">
                        <el-switch v-model="scope.row.mg_state"
                                   @change="userStateChanged(scope)" />
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-button>
                        <el-button type="danger">
                            <el-icon>
                                <Delete />
                            </el-icon>
                        </el-button>
                        <el-tooltip class="box-item"
                                    effect="dark" content="分配角色"
                                    placement="top"
                                    :enterable="false">
                            <el-button type="warning">
                                <el-icon>
                                    <Setting />
                                </el-icon>
                            </el-button>
                        </el-tooltip>

                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <el-pagination v-model:current-page="queryInfo.pagenum"
                           v-model:page-size="queryInfo.pagesize"
                           :page-sizes="[10, 15, 20, 25]"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange" />
        </el-card>
        <!-- 添加用户对话框 -->
        <el-dialog v-model="dialogVisible"
                   title="添加用户"
                   width="50%">
            <!-- 内容总体 -->
            <el-form
                     :model="ruleForm"
                     :rules="rules"
                     label-width="120px"
                     :size="formSize"
                     status-icon>
                <el-form-item label="Activity name" prop="name">
                    <el-input v-model="ruleForm.name" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
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
                pagesize: 10,
            },
            userList: [],
            total: 0,
            dialogVisible: false
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
        },
        handleSizeChange(newSize) {
            this.queryInfo.pagesize = newSize
            this.getUserList()
        },
        handleCurrentChange(newPage) {
            this.queryInfo.pagenum = newPage
            this.getUserList()
        },
        async userStateChanged(userInfo) {
            console.log(userInfo);
            //const { data: res } = await this.$http.put(``)
            // if (res.meta.status !== 200) {
            //     userInfo.row.mg_state = !userInfo.row.mg_state
            //     return this.$message.error(res.meta.msg)
            // }
            this.$message.success('更新用户状态成功')
            this.$store.state.res_user.data.users[userInfo.$index].mg_state = userInfo.row.mg_state
        },
        changeDialogVisible() {
            this.dialogVisible = true
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

    .el-pagination {
        margin-top: 20px;
    }
}
</style>