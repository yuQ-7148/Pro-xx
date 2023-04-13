<template>
    <div id="container">
        <!-- 系统类型 -->
        <div class="conditionDiv">
            <el-select v-model="condition.type.value"
                       @change="updateCondition"
                       placeholder="本部">
                <el-option :label="'所有'"
                           :value="'all'" selected />
            </el-select>
        </div>
        <div id="dateDiv">
            <!-- 日期类型选择 -->
            <div class="conditionDiv" style="margin-right: 10px; display: inline-block; width: 75px;">
                <el-select v-model="condition.date.type"
                           @change="updateCondition"
                           placeholder="日期类型">
                    <el-option :label="'年'"
                               :value="'year'" />
                    <el-option :label="'月'"
                               :value="'month'" />
                    <el-option :label="'全部'"
                               :value="'allTime'" />
                </el-select>
            </div>
            <!-- 年选择 -->
            <div class="conditionDiv" v-if="condition.date.type == 'year'">
                <el-date-picker v-model="condition.date.value"
                                type="year"
                                @change="updateCondition"
                                placeholder="年" />
            </div>
            <!-- 月选择 -->
            <div class="conditionDiv" v-if="condition.date.type == 'month'">
                <el-date-picker v-model="condition.date.value"
                                type="month"
                                @change="updateCondition"
                                placeholder="月" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RlbzfxConditionCom',
    props: ['condition'],
    emits: ['onOnUpdate:condition'],
    methods: {
        updateCondition() {
            return this.$emit('onOnUpdate:condition', this.condition)
        }
    }
}
</script>

<style lang="less" scoped>
#container {
    padding: 0;

    .conditionDiv {
        display: inline-block;
        width: auto;
        margin: 0;
        margin-right: 50px;
        padding: 0;

        .el-switch {
            margin-left: 10px;
        }
    }
    #dateDiv{
        display: inline-block;
        width: auto;
        margin-top: 5px;
    }
}
</style>