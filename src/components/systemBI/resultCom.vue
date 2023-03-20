<template>
    <div id="container">
        <el-card>
            <h3 id="label">{{ data.label }}</h3>
            <h3 id="value">{{ data.value }}</h3>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'ResultCom',
    props: ['data']
}
</script>

<style lang="less" scoped>
#container {
    display: inline-block;
    width: 100%;
    height: 220px;
    padding: 0;

    .el-card {
        position: relative;
        height: 100%;
        width: 100%;
        display: inline-block;
        margin: 0;
        padding: 0;

        #label {
            display: inline-block;
            margin: 0;
            padding: 0;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
        }

        #value {
            display: inline-block;
            margin: 0;
            padding: 0;
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
            color: aqua;
        }
    }
}
</style>