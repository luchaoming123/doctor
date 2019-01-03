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

                            <span style="cursor: pointer" @click="return_ya()">{{where_from}}</span>
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
                                    {{data_return.table_four.name}}：{{data_return.table_four.data}}
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
                table_list:[],
                data_return:{
                    /*1.头动数据*/
                    table_one:{
                        "name": "眼动数据",
                        "data": [
                            {
                                "timestamp": "2019-01-01T12:58:36.1019086+00:00",
                                "x": 1.25,
                                "y": 0,
                                "z": 0,
                                "w": 0
                            },
                            {
                                "timestamp": "2019-01-01T12:58:36.1029086+00:00",
                                "x": 1.24929655,
                                "y": 0.001249297,
                                "z": 0,
                                "w": 0
                            },
                            {
                                "timestamp": "2019-01-01T12:58:36.1039086+00:00",
                                "x": 1.24719024,
                                "y": 0.002494384,
                                "z": 0,
                                "w": 0
                            },
                        ]
                    },
                    /*2.眼动数据*/
                    table_two:{
                        "name": "眼动数据",
                        "data": [
                            {
                                "timestamp": "2019-01-01T12:58:36.1019086+00:00",
                                "x": 1.25,
                                "y": 0,
                                "z": 0,
                                "w": 0
                            },
                            {
                                "timestamp": "2019-01-01T12:58:36.1029086+00:00",
                                "x": 1.24929655,
                                "y": 0.001249297,
                                "z": 0,
                                "w": 0
                            },
                            {
                                "timestamp": "2019-01-01T12:58:36.1039086+00:00",
                                "x": 1.24719024,
                                "y": 0.002494384,
                                "z": 0,
                                "w": 0
                            },
                        ]
                    },
                    /*3.超市轨迹*/
                    table_three:{
                        "name": "移动路径",
                        "data": [
                            {
                                "timestamp": "2019-01-02T04:52:28.8420734+00:00",
                                "x": 1.25,
                                "y": 0,
                                "z": 0,
                                "w": 0
                            },
                            {
                                "timestamp": "2019-01-02T04:52:28.8430734+00:00",
                                "x": 1.24929655,
                                "y": 0.001249297,
                                "z": 0,
                                "w": 0
                            },
                            {
                                "timestamp": "2019-01-02T04:52:28.8440734+00:00",
                                "x": 1.24719024,
                                "y": 0.002494384,
                                "z": 0,
                                "w": 0
                            },
                        ]
                    },
                    /*4.单次排比*/
                    table_9:{
                        "name": "群体排比",
                        "data": [
                            {
                                "name": "测试属性0",
                                "percentile": 87
                            },
                            {
                                "name": "测试属性1",
                                "percentile": 32
                            },
                            {
                                "name": "测试属性2",
                                "percentile": 25
                            }
                        ]
                    },
                    /*5.任务表现*/
                    table_four:{
                        "name": "耗时",
                        "data": "56.76566s"
                    },
                    /*6.历史数据*/
                    table_five:{
                        "name": "历史数据",
                        "data": [
                            {
                                "name": "测试属性0",
                                "data": [
                                    77,
                                    9,
                                    9,
                                    48,
                                    5
                                ]
                            },
                            {
                                "name": "测试属性1",
                                "data": [
                                    98,
                                    46,
                                    91,
                                    60,
                                    18
                                ]
                            },
                            {
                                "name": "测试属性2",
                                "data": [
                                    48,
                                    100,
                                    13,
                                    83,
                                    42
                                ]
                            }
                        ]
                    },

                },
                where_from:''

            }
        },
        components:{
            baisis_msg,
            basis_msg_mobile
        },
        mounted(){

            let that=this;
            /*接收传的参数*/
            let get_json=JSON.parse(this.$route.query.page_show);

            switch (get_json.id){
                case 'rehabilitation':
                    that.where_from='康复室';
                    break;
                case 'vrclassroom':
                    that.where_from='虚拟教室';
                    break;
                case 'supermarket':
                    that.where_from='超市';
                    break;
            }
            /**
             * 表一
             * */
            /*1.头动数据*/
            $.ajax({
                url:'http://api.mindfrog.cn/api/Visualize/GetVisualizeData?ProjectId='+get_json.id+'&ScopeId=string&ChartId=HeadPosition',
                type:'post',
                data:{
                    ProjectId:get_json.id,
                    ScopeId:'string',
                    ChartId:'HeadPosition'
                },
                dataType:'JSON',
                success:function (data) {
                    that.data_return.table_one=data;

                    // 基于准备好的dom，初始化echarts实例
                    var myChart_one = echarts.init(document.getElementById('main_one'));
                    // 绘制图表
                    myChart_one.setOption(that.echart_one());
                },
                error:function (data) {


                }
            });

            /**
             * 表二
             * */
            /*2.眼动数据*/
            const product_two=new Promise(function (resolve,reject) {
                $.ajax({
                    url:'http://api.mindfrog.cn/api/Visualize/GetVisualizeData?ProjectId='+get_json.id+'&ScopeId=string&ChartId=EyePosition',
                    type:'post',
                    data:{
                        ProjectId:get_json.id,
                        ScopeId:'string',
                        ChartId:'EyePosition'
                    },
                    dataType:'JSON',
                    success:function (data) {
                        that.data_return.table_two=data;


                        // 基于准备好的dom，初始化echarts实例
                        var myChart_two = echarts.init(document.getElementById('main_two'));

                        // 绘制图表
                        myChart_two.setOption(that.echart_two());
                    },
                    error:function (data) {
                        // 基于准备好的dom，初始化echarts实例
                        var myChart_two = echarts.init(document.getElementById('main_two'));

                        // 绘制图表
                        myChart_two.setOption(that.echart_two());
                    }
                });
            });

            /**
             * 表三
             * */
            /*3.超市轨迹*/
            $.ajax({
                url:'http://api.mindfrog.cn/api/Visualize/GetVisualizeData?ProjectId='+get_json.id+'&ScopeId=string&ChartId=PersonMovement',
                type:'post',
                data:{
                    ProjectId:get_json.id,
                    ScopeId:'string',
                    ChartId:'PersonMovement'
                },
                dataType:'JSON',
                success:function (data) {
                    that.data_return.table_three=data;

                    // 基于准备好的dom，初始化echarts实例
                    var myChart_three = echarts.init(document.getElementById('main_three'));

                    // 绘制图表
                    myChart_three.setOption(that.echart_three());
                },
                error:function (data) {
                    // 基于准备好的dom，初始化echarts实例
                    var myChart_three = echarts.init(document.getElementById('main_three'));

                    // 绘制图表
                    myChart_three.setOption(that.echart_three());

                }
            });




            /**
             * 表9
             * */
            /*4.任务表现*/
            $.ajax({
                url:'http://api.mindfrog.cn/api/Visualize/GetVisualizeData?ProjectId='+get_json.id+'&ScopeId=string&ChartId=CostTime',
                type:'post',
                data:{
                    ProjectId:get_json.id,
                    ScopeId:'string',
                    ChartId:'CostTime'
                },
                dataType:'JSON',
                success:function (data) {
                    that.data_return.table_three=data;

                    // 基于准备好的dom，初始化echarts实例
                    var myChart_9 = echarts.init(document.getElementById('main_9'));

                    // 绘制图表
                    myChart_9.setOption(that.echart_9());
                },
                error:function (data) {
                    // 基于准备好的dom，初始化echarts实例
                    var myChart_9 = echarts.init(document.getElementById('main_9'));

                    // 绘制图表
                    myChart_9.setOption(that.echart_9());

                }
            });


            /**
             * 表10
             * */
            /*5.历史数据*/
            $.ajax({
                url:'http://api.mindfrog.cn/api/Visualize/GetVisualizeData?ProjectId='+get_json.id+'&ScopeId=string&ChartId=History',
                type:'post',
                data:{
                    ProjectId:get_json.id,
                    ScopeId:'string',
                    ChartId:'History'
                },
                dataType:'JSON',
                success:function (data) {
                    that.data_return.table_five=data;


                    // 基于准备好的dom，初始化echarts实例
                    var myChart_10 = echarts.init(document.getElementById('main_10'));

                    // 绘制图表
                    myChart_10.setOption(that.echart_10());
                },
                error:function (data) {

                    // 基于准备好的dom，初始化echarts实例
                    var myChart_10 = echarts.init(document.getElementById('main_10'));

                    // 绘制图表
                    myChart_10.setOption(that.echart_10());

                }
            });

        },
        methods:{
            exit(){

            },
            /*1.头动数据*/
            echart_one(){
                let that=this;
                var save_data_x=[];
                var save_data_y=[];
                var save_data_z=[];
                var x=[];
                $.each(that.data_return.table_one.data,function (index,element) {
                    save_data_x.push(element.x);
                    save_data_y.push(element.y);
                    save_data_z.push(element.z);
                    x.push(index);
                });



                var option = {
                    title: {
                        text: '头动数据'
                    },
                    xAxis: {
                        type: 'category',
                        data: x
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: save_data_x,
                            type: 'line',
                            smooth: true,
                        },
                        {
                            data: save_data_y,
                            type: 'line',
                            smooth: true,
                        },
                        {
                            data: save_data_z,
                            type: 'line',
                            smooth: true,
                        }
                    ]
                };

                return option;

            },
            echart_two(){
                let that=this;
                var save_data=[];
                $.each(that.data_return.table_two.data,function (index,element) {
                    save_data.push([element.x,element.y]);
                });
                var option = {
                    title: {
                        text: '眼动数据'
                    },
                    xAxis: {},
                    yAxis: {},
                    series: [{
                        symbolSize: 20,
                        data: save_data,
                        type: 'scatter'
                    }]
                };


                return option;
            },
            echart_three(){

                let that=this;
                var save_data=[];
                $.each(that.data_return.table_three.data,function (index,element) {
                    save_data.push([element.x,element.y]);
                });


                var symbolSize = 20;
                var data = save_data;

                var option = {
                    title:{
                        text: '超市轨迹'
                    },
                    tooltip: {
                        triggerOn: 'none',
                        formatter: function (params) {

                        }
                    },
                    grid: {
                    },
                    xAxis: {
                        min: 0,
                        max: 2,
                        type: 'value',
                        axisLine: {onZero: false}
                    },
                    yAxis: {
                        min: 0,
                        max: 1,
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
                let that=this;
                var save_data_x=[];
                var save_data_y=[];
                $.each(that.data_return.table_9.data,function (index,element) {
                    save_data_x.push(element.percentile);
                    save_data_y.push(element.name);
                });

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
                        data: [that.data_return.table_9]
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
                        data: save_data_y
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
                            data: save_data_x
                        }
                    ]
                };



                return option;
            },
            echart_10(){

                let that=this;
                var save_data_x;
                var save_data_y=[];
                $.each(that.data_return.table_five.data,function (index,element) {
                    save_data_y.push({
                        data:element.data,
                        type: 'line'
                    });
                    save_data_x=[]
                    $.each(element.data,function (index_two,element_two) {
                        save_data_x.push(index_two);
                    });
                });

                var option = {
                    title: {
                        text: '历史数据'
                    },
                    xAxis: {
                        type: 'category',
                        data: save_data_x
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: save_data_y
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
