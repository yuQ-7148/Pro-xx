<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="'/home'">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>权限列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图 -->
        <el-card class="box-card">
            <!-- 用户列表 -->
            <el-table :data="userList" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column label="权限名称" prop="username"></el-table-column>
                <el-table-column label="路径" prop="email"></el-table-column>
                <el-table-column label="权限等级" width="195px"></el-table-column>
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
    </div>
</template>

<script>
export default {
    name: 'Rights',
}
</script>

<style lang="less" scoped></style>