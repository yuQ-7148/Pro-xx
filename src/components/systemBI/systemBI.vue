<template>
    <div class="common-layout">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="'/home'">首页</el-breadcrumb-item>
            <el-breadcrumb-item>系统BI</el-breadcrumb-item>
            <el-breadcrumb-item>系统BI</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container>
            <!-- 头部 -->
            <el-header>
                <condition-com v-model:condition="condition"></condition-com>
            </el-header>
            <!-- 页面主体 -->
            <el-main>
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6"><result-com :data="data.res_1"></result-com></el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import ConditionCom from './conditionCom.vue'
import ResultCom from './resultCom.vue'

export default {
    name: 'SystemBI',
    components: {
        ConditionCom,
        ResultCom,
    },
    data() {
        return {
            condition: {
                type: {
                    value: '',
                    used: true,
                },
                date: {
                    type: 'year',
                    value: ''
                }
            },
            data: {
                res_1: {
                    label: 'one',
                    value: 'two',
                },
                res_2: {
                    label: 'three',
                    value: 'four',
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.common-layout {
    height: 100%;

    .el-breadcrumb {
        margin-bottom: 20px;
        font-size: 12px;
    }

    .el-container {
        padding: 0;

        .el-header {
            padding: 0;
            height: 50px;
        }

        .el-main {
            padding: 0;

            .el-row {
                width: 100%;

                .el-col {
                    margin-bottom: 20px;
                }
            }
        }
    }
}
</style>