<template>
    <div class="common-layout">
        <el-container>
            <!-- 头部 -->
            <el-header>
                <div id="title">
                    <p>人力编制分析</p>
                </div>
                <div id="condition"><rlbzfx-condition-com v-model:condition="condition"></rlbzfx-condition-com></div>
            </el-header>
            <!-- 页面主体 -->
            <el-main>
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><rlbzfx-result-com :data="data.res_1"></rlbzfx-result-com></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" id="chartCol"><v-chart class="chart" :option="option"></v-chart></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" id="tableCol">
                        <p>人员统计明细表</p>
                        <el-table :data="data.table_data" height="240px" border show-summary stripe>
                            <el-table-column label="本部" prop="bb"></el-table-column>
                            <el-table-column label="编制人数" prop="bz"></el-table-column>
                            <el-table-column label="在职人数" prop="zz"></el-table-column>
                            <el-table-column label="兼职人数" prop="jz"></el-table-column>
                            <el-table-column label="缺员人数" prop="qy"></el-table-column>
                            <el-table-column label="增编人数" prop="zb"></el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import RlbzfxConditionCom from './conditionCom.vue'
import RlbzfxResultCom from './resultCom.vue'

export default {
    name: 'RLBZFX',
    components: {
        RlbzfxConditionCom,
        RlbzfxResultCom,
    },
    data() {
        return {
            //搜索条件
            condition: {
                type: {
                    value: 'all',
                },
                date: {
                    type: 'year',
                    value: ''
                }
            },
            //展示数据
            data: {
                res_1: {
                    label: '标题',
                    value: '数据',
                },
                res_2: {
                    label: 'three',
                    value: 'four',
                },
                table_data: [
                    {
                        bb: 'bb1',
                        bz: 12,
                        zz: 13,
                        jz: 32,
                        qy: 23,
                        zb: 2,
                    },
                    {
                        bb: 'bb2',
                        bz: 10,
                        zz: 23,
                        jz: 5,
                        qy: 18,
                        zb: 20,
                    },
                ],
            }
        }
    },
    computed: {
        option() {
            return {
                title: {
                    text: '【在职人数&兼职人数】分析',
                    left: 'left',
                },
                tooltip: {
                    trigger: 'axis'
                },
                //图标
                legend: {
                    data: ['在职人数', '兼职人数'],
                    top: '10px',
                    right: '10px',
                },
                xAxis: {
                    type: 'category',
                    //x轴刻度与标题对齐
                    axisTick: {
                        alignWithLabel: true
                    },
                },
                yAxis: {},
                series: [
                    {
                        name: '在职人数',
                        type: 'line',
                        smooth: true,
                    },
                    {
                        name: '兼职人数',
                        type: 'line',
                        smooth: true,
                    },
                ],

                //按列传入数据（方式一）-------------------------------------------------------------------------------------------------
                // dataset: {
                //     source: [
                //         ['weekday', 'count', 'score'],
                //         ['Mon', 820, 840],
                //         ['Tue', 920, 952],
                //         ['Wed', 901, 911],
                //         ['Thu', 934, 914],
                //         ['Fri', 1290, 1340],
                //         ['Sat', 1330, 1110],
                //         ['Sun', 1320, 1320],
                //     ]
                // },

                //按列传入数据（方式二）-------------------------------------------------------------------------------------------------
                // dataset: {
                //     source: [
                //         { weekday: 'Mon', count: 820, score: 840 },
                //         { weekday: 'Tue', count: 920, score: 952 },
                //         { weekday: 'Wed', count: 901, score: 911 },
                //         { weekday: 'Thu', count: 934, score: 914 },
                //         { weekday: 'Fri', count: 1290, score: 1340 },
                //         { weekday: 'Sat', count: 1330, score: 1110 },
                //         { weekday: 'Sun', count: 1320, score: 1320 },
                //     ]
                // },

                //按行传入数据----------------------------------------------------------------------------------------------------------
                dataset: {
                    source: {
                        '日期': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        '在职人数': [820, 932, 901, 934, 1290, 1330, 1320],
                        '兼职人数': [840, 952, 911, 914, 1340, 1110, 1320],
                    }
                },




                // drilldownData: [
                //     {
                //         dataGroupId: 'count1',
                //         data: [
                //             ['Mon', 890],
                //             ['Tue', 1120],
                //             ['Wed', 1340],
                //             ['Thu', 934],
                //             ['Fri', 932],
                //             ['Sat', 953],
                //             ['Sun', 914],
                //         ]
                //     }
                // ]


            }
        }
    },
    mounted() {
        
    },
}
</script>

<style lang="less" scoped>
.common-layout {
    height: 100%;

    .el-container {
        padding: 0;
        height: 100%;

        .el-header {
            position: relative;
            padding: 0;
            min-height: 115px;
            height: auto;
            width: 100%;

            #title {
                position: relative;
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                height: 60px;
                width: 100%;
                border: 2px solid #eee;
                box-shadow: 0px 0px 8px 0px #d1d1d1;

                p {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: inline-block;
                    margin: 0;
                    padding: 0;
                    font-size: 22px;
                    font-weight: bold;
                }
            }

            #condition {
                margin-top: 10px;
                margin-left: 30px;
            }
        }

        .el-main {
            padding: 10px 30px;

            .el-row {
                width: 100%;

                .el-col {
                    margin-bottom: 20px;
                }

                #chartCol {
                    position: relative;
                    height: 260px;
                    min-width: 480px;

                    .chart {
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, 0);
                        height: 260px;
                        width: 480px;
                        background-color: #fff;
                        border: 2px solid #eee;
                        box-shadow: 0px 0px 8px 0px #d1d1d1;
                    }
                }

                #tableCol {
                    position: relative;
                    height: 260px;
                    min-width: 480px;

                    p {
                        top: 0;
                        left: 0;
                        display: inline-block;
                        padding: 0;
                        margin: 0;
                        margin-left: 5px;
                        height: 20px;
                        font-size: 14px;
                        font-weight: bold;
                    }
                }

            }
        }
    }
}
</style>