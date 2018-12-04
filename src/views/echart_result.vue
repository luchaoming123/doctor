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
                            <div class="pad_10" id="main_three" style="height: 400px;"></div>
                            </Col>
                            <Col span="8" class="view_chart">
                            <div class="pad_10" id="main_four" style="height: 400px;"></div>
                            </Col>
                            <Col span="8" class="view_chart">
                            <div class="pad_10" id="main_five" style="height: 400px;"></div>
                            </Col>
                            <Col span="8" class="view_chart">
                            <div class="pad_10" id="main_six" style="height: 400px;"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8" class="view_chart">
                                <div class="pad_10" id="main_7" style="height: 400px;"></div>
                            </Col>
                            <Col span="16" class="view_chart">
                            <div class="pad_10" id="main_8" style="height: 400px;"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" class="view_chart">
                            <div class="pad_10" id="main_9" style="height: 400px;"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" class="view_chart">
                            <div class="pad_10" id="main_10" style="height: 400px;"></div>
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

            /**
             * 表五
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_five = echarts.init(document.getElementById('main_five'));

            // 绘制图表
            myChart_five.setOption(this.echart_five());

            /**
             * 表六
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_six = echarts.init(document.getElementById('main_six'));

            // 绘制图表
            myChart_six.setOption(this.echart_six());

            /**
             * 表7
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_7 = echarts.init(document.getElementById('main_7'));

            // 绘制图表
            myChart_7.setOption(this.echart_7());

            /**
             * 表8
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_8 = echarts.init(document.getElementById('main_8'));

            // 绘制图表
            myChart_8.setOption(this.echart_8());

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
                        type: 'bar'
                    }]
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
            },

            echart_five(){
                var option = {
                    backgroundColor: '#2c343c',

                    title: {
                        text: 'Customized Pie',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:274, name:'联盟广告'},
                                {value:235, name:'视频广告'},
                                {value:400, name:'搜索引擎'}
                            ].sort(function (a, b) { return a.value - b.value; }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };

                return option;
            },

            echart_six(){
                var
                    option = {
                        color: ['#3398DB'],
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                axisTick: {
                                    alignWithLabel: true
                                }
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [
                            {
                                name:'直接访问',
                                type:'bar',
                                barWidth: '60%',
                                data:[10, 52, 200, 334, 390, 330, 220]
                            }
                        ]
                    };


                return option;
            },
            echart_7(){
                var option = {
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'邮件营销',
                            type:'bar',
                            stack: '广告',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'bar',
                            stack: '广告',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'bar',
                            stack: '广告',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'搜索引擎',
                            type:'bar',
                            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                            markLine : {
                                lineStyle: {
                                    normal: {
                                        type: 'dashed'
                                    }
                                },
                                data : [
                                    [{type : 'min'}, {type : 'max'}]
                                ]
                            }
                        },
                        {
                            name:'百度',
                            type:'bar',
                            barWidth : 5,
                            stack: '搜索引擎',
                            data:[620, 732, 701, 734, 1090, 1130, 1120]
                        },
                        {
                            name:'谷歌',
                            type:'bar',
                            stack: '搜索引擎',
                            data:[120, 132, 101, 134, 290, 230, 220]
                        },
                        {
                            name:'必应',
                            type:'bar',
                            stack: '搜索引擎',
                            data:[60, 72, 71, 74, 190, 130, 110]
                        },
                        {
                            name:'其他',
                            type:'bar',
                            stack: '搜索引擎',
                            data:[62, 82, 91, 84, 109, 110, 120]
                        }
                    ]
                };


                return option;
            },
            echart_8(){
                var option = {
                    title: {
                        text: '堆叠区域图'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            areaStyle: {},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {},
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            areaStyle: {},
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {normal: {}},
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };

                return option;
            },
            echart_9(){
                var option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }]
                };



                return option;
            },
            echart_10(){
                var option = {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };



                return option;
            }
        }
    }
</script>
