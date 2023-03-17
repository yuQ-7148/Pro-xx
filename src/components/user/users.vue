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
                <el-table-column type="index" width="50px"></el-table-column>
                <el-table-column label="姓名" prop="FName"></el-table-column>
                <el-table-column label="所在部门" prop="FDeptName"></el-table-column>
                <el-table-column label="职位" prop="FStation"></el-table-column>
                <el-table-column label="电话" prop="FPhoneNumber"></el-table-column>
            </el-table>
            <!-- 分页栏 -->
            <el-pagination v-model:current-page="queryInfo.pagenum"
                           v-model:page-size="queryInfo.pagesize"
                           :page-sizes="[20, 50, 100]"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange" />
        </el-card>
        <!-- 添加用户对话框 -->
        <el-dialog v-model="dialogVisible"
                   title="添加用户"
                   width="50%"
                   @close="dialogClosed">
            <!-- 内容总体 -->
            <el-form :model="addForm"
                     :rules="addFormRules"
                     ref="addFormRef"
                     label-width="120px">
                <el-form-item label="ID" prop="id">
                    <el-input v-model="addForm.id" />
                </el-form-item>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="addForm.username" />
                </el-form-item>
                <el-form-item label="角色名" prop="role_name">
                    <el-input v-model="addForm.role_name" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addForm.email" />
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input v-model="addForm.mobile" />
                </el-form-item>
            </el-form>
            <!-- 对话框按钮 -->
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="addUser">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 修改用户对话框 -->
        <el-dialog v-model="editDialogVisible"
                   title="修改用户"
                   width="50%"
                   @close="editDialogClosed">
            <!-- 内容总体 -->
            <el-form :model="editUser"
                     :rules="addFormRules"
                     ref="editFormRef"
                     label-width="120px">
                <el-form-item label="ID" prop="id">
                    <el-input v-model="editUser.id" disabled />
                </el-form-item>
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="editUser.username" disabled />
                </el-form-item>
                <el-form-item label="角色名" prop="role_name">
                    <el-input v-model="editUser.role_name" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="editUser.email" />
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input v-model="editUser.mobile" />
                </el-form-item>
            </el-form>
            <!-- 对话框按钮 -->
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="editDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="editUserInfo">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
// import { ElMessage, ElMessageBox } from 'element-plus'


export default {
    name: 'Users',
    data() {
        var checkEmail = (rule, value, cb) => {
            const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
            if (regEmail.test(value)) {
                return cb()
            }

            cb(new Error('请输入合法的邮箱'))
        }

        var checkMobile = (rule, value, cb) => {
            const regMobile = /^(1)+([0-9]{10})+/
            if (regMobile.test(value)) {
                return cb()
            }

            cb(new Error('请输入合法手机号'))
        }
        return {
            queryInfo: {
                query: '',
                pagenum: 1,
                pagesize: 20,
            },
            userList: [],
            total: 0,
            dialogVisible: false,
            editDialogVisible: false,
            editUser: [],
            addForm: {
                id: '',
                username: '',
                role_name: '',
                type: 1,
                email: '',
                mobile: '',
                mg_state: true
            },
            addFormRules: {
                id: [
                    {
                        required: true,
                        message: '请输入ID',
                        trigger: 'blur'
                    },
                    {
                        max: 10,
                        min: 1,
                        message: '用户名的长度在1~10字符之间',
                        trigger: 'blur'
                    }
                ],
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    },
                    {
                        max: 10,
                        min: 3,
                        message: '用户名的长度在3~10字符之间',
                        trigger: 'blur'
                    }
                ],
                role_name: [
                    {
                        required: true,
                        message: '请输入角色名',
                        trigger: 'blur'
                    },
                    {
                        max: 20,
                        min: 3,
                        message: '用户名的长度在3~20字符之间',
                        trigger: 'blur'
                    }
                ],
                email: [
                    {
                        required: true,
                        message: '请输入邮箱',
                        trigger: 'blur'
                    },
                    {
                        validator: checkEmail,
                        trigger: 'blur'
                    }
                ],
                mobile: [
                    {
                        required: true,
                        message: '请输入手机号',
                        trigger: 'blur'
                    },
                    {
                        max: 11,
                        message: '请输入合法手机号',
                        trigger: 'blur'
                    },
                    {
                        validator: checkMobile,
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        async getUserList() {
            const res = await this.$http.get('/shr/getAllUsers')
            // console.log(res);
            if (res.request.status !== 200) return this.$message.error('获取用户数据失败')
            this.total = res.data.length
            this.userList = res.data.filter(
                (item, index) =>
                    index < this.queryInfo.pagenum * this.queryInfo.pagesize &&
                    index >= (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize
            );
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
            // console.log(userInfo);
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
        },
        dialogClosed() {
            this.$refs.addFormRef.resetFields()
        },
        editDialogClosed() {
            this.$refs.editFormRef.resetFields()
        },
        addUser() {
            this.$refs.addFormRef.validate(async valid => {
                if (!valid) return this.$message.error('表中所填数据存在错误！')
                // const { data: res } = await this.$http.post('users', this.addForm)
                const res = this.$store.state.res_addUser
                if (res.meta.status !== 201) return this.$message.error('用户添加失败！')
                this.$store.state.res_user.data.users.push(newForm)
                // console.log(this.addForm);
                this.$message.success('用户添加成功')
                this.dialogVisible = false
                // this.getUserList()
            })
        },
        editUserInfo() {
            this.$refs.editFormRef.validate(async valid => {
                if (!valid) return this.$message.error('表中所填数据存在错误！')
                // const { data: res } = await this.$http.post('users', this.addForm)
                // const res = this.$store.state.res_addUser
                // if (res.meta.status !== 201) return this.$message.error('用户添加失败！')
                // this.$store.state.res_user.data.users.push(newForm)
                // console.log(this.addForm);
                this.$message.success('用户修改成功')
                this.editDialogVisible = false
                // this.getUserList()
            })
        },
        async showEditDialog(editUser) {
            // const { data: res } = await this.$http.get('user/' + editUser.id)
            const res = editUser
            // if (res.meta.status !== 200) return this.$message.error('用户数据请求失败')
            this.editUser = editUser
            this.editDialogVisible = true
        },
        deleteUserInfo() {
            ElMessageBox.confirm(
                '确定要删除这个用户吗?',
                '删除用户',
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            )
                .then(() => {

                    ElMessage({
                        type: 'success',
                        message: '删除成功',
                    })
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '删除取消',
                    })
                })
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
    position: relative;
    height: calc(100% - 40px);
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.15);

    .el-table {
        position: absolute;
        margin-top: 20px;
        font-size: 14px;
        height: calc(100% - 140px);
    }

    .el-pagination {
        position: absolute;
        margin-top: 20px;
        bottom: 15px;
    }
}
</style>