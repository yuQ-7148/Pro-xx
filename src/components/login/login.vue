<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像 -->
            <div class="avatar_box">
                <img src="../../assets/images/01.jpg" alt="">
            </div>
            <!-- 表单 -->
            <el-form ref="loginFormRef" :model="form" :rules="rules" label-width="70px" class="login_form">
                <!-- 用户名 -->
                <el-form-item label="用户名" prop="username">
                    <el-input prefix-icon="User" v-model="form.username" />
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                    <el-input type="password" prefix-icon="Lock" v-model="form.password" />
                </el-form-item>
                <!-- 按钮 -->
                <el-form class="btns">
                    <el-button type="primary">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        resetLoginForm() {
            this.$refs.loginFormRef.resetFields()
        }
    }
}
</script>

<style lang="less" scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px #292929;
}

.avatar_box {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 2px solid #eee;
    border-radius: 50%;
    padding: 7px;
    box-shadow: 0 0 10px #292929;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #eee;
    }
}

.login_form {
    position: absolute;
    bottom: 45px;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
}

.btns {
    display: flex;
    justify-content: flex-end;
}
</style>