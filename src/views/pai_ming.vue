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
        height: 900px;
    }
</style>
<template>
    <div class="echart_result">
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

                        <span>排名情况</span>
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
</template>

<script>
    import $ from 'jquery';
    import baisis_msg from './basis_msg.vue';
    import echarts from 'echarts';
    export default {
        data () {
            return {


            }
        },
        components:{
            baisis_msg
        },
        mounted(){


            /**
             * 表一
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_one = echarts.init(document.getElementById('main_one'));
            // 绘制图表
            myChart_one.setOption(this.echart_one());
            /**
             * 表二
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_two = echarts.init(document.getElementById('main_two'));

            // 绘制图表
            myChart_two.setOption(this.echart_two());

            /**
             * 表三
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_three = echarts.init(document.getElementById('main_three'));

            // 绘制图表
            myChart_three.setOption(this.echart_three());

            /**
             * 表四
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_four = echarts.init(document.getElementById('main_four'));

            // 绘制图表
            myChart_four.setOption(this.echart_four());

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
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
                };

                return option;

            },
            echart_two(){
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
                };

                return option;
            },
            echart_three(){

                var colors = ['#5793f3', '#d14a61', '#675bba'];


                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
                };
                return option;
            },
            echart_four(){
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
                };
                return option;
            }
        }
    }
</script>
