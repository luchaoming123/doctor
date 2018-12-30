<style scope>
    .echart_result{
        .contents_des{
            display: flex;
            .title{
                margin: 0 20px;
            }
            .view_chart{
                .pad_10{
                    margin: 10px;
                    background: #FFFFFF;
                    box-shadow: 0 0 4px 0 rgba(0,0,0,0.10);
                    border-radius: 4px;
                    padding: 10px;
                }
            }
            .view_chart_title_cons{

                padding: 30px;

                .view_chart_title{
                    padding: 20px 0;
                    .name{
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .box_flowing{
        display: flex;
    }
    .xu_ni{
        width: 16%;
        height: 300px;
    }
    .box_for_mob_echart{
        margin: 10px 20px 0 20px;
        padding: 15px;
        background: #FFFFFF;
        box-shadow: 0 0 6px 0 rgba(0,0,0,0.10);
        border-radius: 3px;
    }
    .show_wordst{
        height: 400px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #6a6a6c;
    }
    .title_ctr_word{
        padding: 20px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 20px;
        color: #E6655F;
    }
    .title_aside{
        font-size: 18px!important;
        color: #6a6a6c;
    }
</style>
<template>
    <div>
        <div class="echart_result computer">
            <baisis_msg></baisis_msg>
            <div class="contents_des">
                <div class="contents_detail">
                    <div class="title_tagss">
                        <div class="postitaons">
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                            <span style="cursor: pointer" @click="return_index()">首页</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                            <span style="cursor: pointer" @click="return_ya()">压力反应测试</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                            <span>图标展示</span>
                        </div>
                        <div class="postitao_ctr">
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-remind-"></i>
                            <span class="center_tlt">报告编号：<b>129825</b></span>
                        </div>
                    </div>
                    <div class="title" style="background: #f8f8f9">
                        <div class="title_ctr_word">测试数据</div>
                        <Divider orientation="left" class="title_aside">1.生理数据</Divider>
                        <Row>
                            <Col span="24" class="view_chart">
                                <div class="pad_10" id="main_one" style="height: 400px;"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" class="view_chart">
                            <div class="pad_10" id="main_two" style="height: 400px;"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" class="view_chart">
                            <div class="pad_10" id="main_three" style="height: 400px;"></div>
                            </Col>
                        </Row>
                        <Divider orientation="left" class="title_aside">2.任务表现</Divider>
                        <Row>
                            <Col span="24" class="view_chart">
                                <div class="pad_10 show_wordst">
                                    {{show_contents}}
                                </div>
                            </Col>
                        </Row>
                        <Divider orientation="left" class="title_aside">3.单次排比</Divider>
                        <Row>
                            <Col span="24" class="view_chart">
                            <div class="pad_10" id="main_9" style="height: 400px;"></div>
                            </Col>
                        </Row>
                        <Divider orientation="left" class="title_aside">4.历史表现</Divider>
                        <Row>
                            <Col span="24" class="view_chart">
                            <div class="pad_10" id="main_10" style="height: 400px;"></div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="box_logo_bottom" style="position: relative">
                <img height="30" src="../images/mindfrog.png" alt="">

                <span>
                &nbsp;&nbsp;&nbsp;&nbsp;Copyright © Mindfrog All rights reserved
            </span>
            </div>
        </div>
        <div class="mobile_phone">
            <basis_msg_mobile title_value="报告编号：129825"></basis_msg_mobile>
            <div class="box_for_mob_echart">
                <div class="pad_10" id="main_mobile_one" style="height: 300px;"></div>
            </div>
            <div class="box_for_mob_echart">
                <div class="pad_10" id="main_mobile_two" style="height: 300px;"></div>
            </div>
            <div class="box_for_mob_echart">
                <div class="pad_10" id="main_mobile_three" style="height: 300px;"></div>
            </div>
            <div class="box_for_mob_echart">
                <div class="pad_10" id="main_mobile_four" style="height: 300px;"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import baisis_msg from './basis_msg.vue';
    import basis_msg_mobile from './basis_msg_mobile.vue';
    import echarts from 'echarts';
    export default {
        data () {
            return {
                show_contents:'大风刮过或或或军军军军',

            }
        },
        components:{
            baisis_msg,
            basis_msg_mobile
        },
        mounted(){


            /**
             * 表一
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_one = echarts.init(document.getElementById('main_one'));
            var main_mobile_one = echarts.init(document.getElementById('main_mobile_one'));
            // 绘制图表
            myChart_one.setOption(this.echart_one());
            main_mobile_one.setOption(this.echart_one());
            /**
             * 表二
             * */
            // 基于准备好的dom，初始化echarts实例
            var myChart_two = echarts.init(document.getElementById('main_two'));
            var main_mobile_two = echarts.init(document.getElementById('main_mobile_two'));

            // 绘制图表
            myChart_two.setOption(this.echart_two());
            main_mobile_two.setOption(this.echart_two());

            /**
             * 表三
             * */
            // 基于准备好的dom，初始化echarts实例
            var myChart_three = echarts.init(document.getElementById('main_three'));
            var main_mobile_three = echarts.init(document.getElementById('main_mobile_three'));

            // 绘制图表
            myChart_three.setOption(this.echart_three());
            main_mobile_three.setOption(this.echart_three());



            /**
             * 表9
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_9 = echarts.init(document.getElementById('main_9'));

            // 绘制图表
            myChart_9.setOption(this.echart_9());

            /**
             * 表10
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_10 = echarts.init(document.getElementById('main_10'));

            // 绘制图表
            myChart_10.setOption(this.echart_10());

        },
        methods:{
            exit(){

            },
            echart_one(){

                var option = {
                    title: {
                        text: '头动数据'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [233, 932, 901, 934, 1290, 1330, 120],
                        type: 'line',
                        smooth: true
                    },
                        {
                            data: [144, 932, 901, 934, 1290, 1330, 320],
                            type: 'line',
                            smooth: true
                        },
                        {
                            data: [533, 932, 901, 934, 1290, 130, 1320],
                            type: 'line',
                            smooth: true
                        }
                    ]
                };

                return option;

            },
            echart_two(){
                var option = {
                    title: {
                        text: '眼动数据'
                    },
                    xAxis: {},
                    yAxis: {},
                    series: [{
                        symbolSize: 20,
                        data: [
                            [10.0, 8.04],
                            [8.0, 6.95],
                            [13.0, 7.58],
                            [9.0, 8.81],
                            [192.0, 108],
                            [14.0, 9.96],
                            [6.0, 7.24],
                            [4.0, 4.26],
                            [12.0, 10.84],
                            [7.0, 4.82],
                            [5.0, 5.68]
                        ],
                        type: 'scatter'
                    }]
                };


                return option;
            },
            echart_three(){
                var symbolSize = 20;
                var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];

                var option = {
                    title:{
                        text: '超市轨迹'
                    },
                    tooltip: {
                        triggerOn: 'none',
                        formatter: function (params) {
                            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
                        }
                    },
                    grid: {
                    },
                    xAxis: {
                        min: -100,
                        max: 80,
                        type: 'value',
                        axisLine: {onZero: false}
                    },
                    yAxis: {
                        min: -30,
                        max: 60,
                        type: 'value',
                        axisLine: {onZero: false}
                    },
                    dataZoom: [
                        {
                            type: 'slider',
                            xAxisIndex: 0,
                            filterMode: 'empty'
                        },
                        {
                            type: 'slider',
                            yAxisIndex: 0,
                            filterMode: 'empty'
                        },
                        {
                            type: 'inside',
                            xAxisIndex: 0,
                            filterMode: 'empty'
                        },
                        {
                            type: 'inside',
                            yAxisIndex: 0,
                            filterMode: 'empty'
                        }
                    ],
                    series: [
                        {
                            id: 'a',
                            type: 'line',
                            smooth: true,
                            symbolSize: symbolSize,
                            data: data
                        }
                    ]
                };

                return option;
            },

            echart_9(){
                var option = {
                    title: {
                        text: '群体表现'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [320, 302, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '邮件营销',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [150, 212, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '搜索引擎',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };



                return option;
            },
            echart_10(){
                var option = {
                    title: {
                        text: '历史数据'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                };




                return option;
            },
            return_index(){
                this.$router.push({ name: 'index', params: { userId: 123 }})
            },
            return_ya(){
                this.$router.push({ name: 'search', params: { userId: 123 }})
            }
        }
    }
</script>
