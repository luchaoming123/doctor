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
</style>
<template>
    <div>
        <div class="echart_result computer">
            <baisis_msg></baisis_msg>
            <div class="contents_des">

                <div class="xu_ni"></div>
                <div class="contents_detail">
                    <div class="title_tagss">
                        <div class="postitaons">
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                            <span>首页</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                            <span>压力反应测试</span>
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
                        <Row>
                            <Col span="8" class="view_chart">
                            <div class="pad_10" id="main_one" style="height: 400px;"></div>
                            </Col>
                            <Col span="8" class="view_chart">
                            <div class="pad_10" id="main_two" style="height: 400px;"></div>
                            </Col>
                            <Col span="8" class="view_chart">
                            <div class="pad_10" id="main_four" style="height: 400px;"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8" class="view_chart">
                            <div class="pad_10" id="main_three" style="height: 400px;"></div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="box_logo_bottom">
                <div class="xu_ni_new"></div>
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
             * 表四
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_four = echarts.init(document.getElementById('main_four'));
            var main_mobile_four = echarts.init(document.getElementById('main_mobile_four'));

            // 绘制图表
            myChart_four.setOption(this.echart_four());
            main_mobile_four.setOption(this.echart_four());

        },
        methods:{
            exit(){

            },
            echart_one(){
                var base = +new Date(1968, 9, 3);
                var oneDay = 24 * 3600 * 1000;
                var date = [];

                var data = [Math.random() * 300];

                for (var i = 1; i < 20000; i++) {
                    var now = new Date(base += oneDay);
                    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
                }

                var date=date;

                var option = {
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    title: {
                        left: 'center',
                        text: '大数据量面积图',
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: date
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 10
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    series: [
                        {
                            name:'模拟数据',
                            type:'line',
                            smooth:true,
                            symbol: 'none',
                            sampling: 'average',
                            itemStyle: {
                                color: 'rgb(255, 70, 131)'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }])
                            },
                            data: data
                        }
                    ]
                };

                return option;

            },
            echart_two(){
                var option = {
                    title: {
                        text: '世界人口总量',
                        subtext: '数据来自网络'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['2011年', '2012年']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
                    },
                    series: [
                        {
                            name: '2011年',
                            type: 'bar',
                            data: [18203, 23489, 29034, 104970, 131744, 630230]
                        },
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [19325, 23438, 31000, 121594, 134141, 681807]
                        }
                    ]
                };

                return option;
            },
            echart_three(){

                var colors = ['#5793f3', '#d14a61', '#675bba'];


                var option = {
                    color: colors,

                    title: {
                        left: 'left',
                        text: '多 X 轴示例',
                    },
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        data:['2015 降水量', '2016 降水量']
                    },
                    grid: {
                        top: 70,
                        bottom: 50
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: colors[1]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '降水量  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                        },
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: colors[0]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '降水量  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name:'2015 降水量',
                            type:'line',
                            xAxisIndex: 1,
                            smooth: true,
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'2016 降水量',
                            type:'line',
                            smooth: true,
                            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                        }
                    ]
                };
                return option;
            },
            echart_four(){
                var option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'line',
                        symbol: 'triangle',
                        symbolSize: 20,
                        lineStyle: {
                            normal: {
                                color: 'green',
                                width: 4,
                                type: 'dashed'
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                borderColor: 'yellow',
                                color: 'blue'
                            }
                        }
                    }]
                };
                return option;
            }
        }
    }
</script>
