<template>
    <div id="container">
        <!-- 系统类型 -->
        <div class="conditionDiv">
            <el-select v-model="condition.type.value"
                       @change="updateCondition"
                       placeholder="系统类型">
                <el-option :label="'所有系统'"
                           :value="'all'" selected />
                <el-option :label="'SHR'"
                           :value="'shr'" />
                <el-option :label="'CRM'"
                           :value="'crm'" />
                <el-option :label="'PLM'"
                           :value="'plm'" />
                <el-option :label="'智能会议'"
                           :value="'Conference'" />
                <el-option :label="'点检'"
                           :value="'spot'" />
            </el-select>
        </div>
        <!-- 日期类型选择 -->
        <div class="conditionDiv" style="margin-right: 10px; display: inline-block; width: 65px;">
            <el-select v-model="condition.date.type"
                       @change="updateCondition"
                       placeholder="日期类型">
                <el-option :label="'年'"
                           :value="'year'" />
                <el-option :label="'月'"
                           :value="'month'" />
                <el-option :label="'周'"
                           :value="'week'" />
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
        <!-- 周选择 -->
        <div class="conditionDiv" v-if="condition.date.type == 'week'">
            <el-date-picker v-model="condition.date.value"
                            type="week"
                            format="[Week] ww"
                            @change="updateCondition"
                            placeholder="周" />
        </div>

    </div>
</template>

<script>
export default {
    name: 'ConditionCom',
    props: ['condition'],
    emits: ['updata:condition'],
    methods: {
        updateCondition() {
            return this.$emit('update:condition', this.condition)
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
}
</style>