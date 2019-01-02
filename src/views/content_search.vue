<style scope>
    .search_content{
        .detail_show{
            display: flex;
            flex-direction: row;
            .title{
                margin:20px 30px;
                background: #FFFFFF!important;
                box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
                .time_limit{
                    display: flex;
                    padding: 10px;
                    align-items: center;
                    .time_limit_p{
                        display: flex;
                        .name{
                            line-height: 34px;
                            margin-right: 10px;
                        }
                    }
                    .time_limit_confirm{
                        margin-left: 20px;
                        cursor: pointer;
                        background: #E6655F;
                        border-radius: 22px;
                        text-align: center;
                        height: 28px;
                        width: 100px;
                        line-height: 28px;

                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #FFFFFF;

                    }

                }
                .tables{
                    padding: 20px;
                    .table_real{
                        width: 100%;
                        text-align: left;
                        th{
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: #9B9B9B;
                            text-align: center;
                            line-height: 14px;
                            height: 50px;
                        }
                        td{
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #4E5056;
                            text-align: center;
                            line-height: 14px;
                            height: 60px;
                            border-bottom: 1px solid #ECECEC;
                        }
                        tbody{
                            background: #F9F9F9;
                            height: 560px!important;
                            overflow-y: scroll;
                        }
                    }
                }
            }
        }
    }

    .xu_ni{
        width: 16%;
        height: 900px;
    }
    .contents_detail{
        width: 100%;
        background: #FAFAFA;
        .title_tagss{
            height: 50px;
            background: #FFFFFF;
            width: 100%;
            border-top: 3px solid #E6655F;
            border-bottom: 1px solid #ECECEC;
            padding-left: 20px;
            display: flex;
            align-items: center;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #4E5056;
            .postitaons{
                position: absolute;
            }
            .postitao_ctr{
                width: 100%;
                text-align: center;
                .center_tlt{
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #9B9B9B;
                }
            }

        }



        .title{
            margin: 10px;
            background-color: #FFFFFF;
            .box_centr{
                background-color: #FFFFFF;
                .box_ant{
                    border-radius: 6px;
                    height: 260px;
                    border: 1px solid #ececec;
                    margin: 10px;
                    padding: 20px 30px;
                    background: #FFFFFF;
                    box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
                .name{
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #9B9B9B;
                    line-height: 14px;
                }
                .values{
                    font-family: HelveticaNeue;
                    font-size: 14px;
                    color: #000000;
                    line-height: 14px;
                    margin-left: 20px;
                }
                .title_name{
                        font-weight: bold;
                        font-family: PingFangSC-Medium;
                        font-size: 18px;
                        color: #000000;
                        display: flex;
                        justify-content: space-between;
                        .tsts{
                            display: flex;
                            .line_col{
                                position: relative;
                                left: -30px;
                                background-color: #E6655F;
                                width: 4px;
                                height: 17px;
                                top:5px;
                            }
                        }
                    .naids{
                        position: relative
                    }

                }
                .boxs_btns{
                    margin-top: 30px;
                    .click_btn{
                        background: #FFFFFF;
                        border: 1px solid #E7E7E7;
                        border-radius: 22px;
                        width: 100%;
                        height: 40px;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #E6655F;
                        cursor: pointer;
                    }
                }

                .name_color{
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #E6655F;
                    line-height: 14px;
                    padding: 0 5px;
                }
                .content_val_one{
                    display: flex;
                }
                    .content_val_two{
                        display: flex;
                        flex-wrap: nowrap;
                    }
                }
            }

        }
    }

    .line_fc{
        background: #ECECEC;
        height: 1px;
        width: 100%;
    }
    .line_colss{
        width: 4px;
        height: 17px;
        position: relative;
        left:-10px;
        background: #E6655F;
        top:7px;
    }
    .buton_choise{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-bottom: 30px;
        .btin{
            background: #FFFFFF!important;
            border: 1px solid #E7E7E7;
            border-radius: 22px;
            width: 180px;
            height: 40px;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #000000;
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            span{
                position: relative;
                bottom: 4px;
            }
        }
        .btin:hover{
            color: #000000!important;
        }
    }


    .alert_css{
        padding:0 20px;
        max-height: 500px;
        overflow-y: scroll;
        .titles{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #4E5056;
            line-height: 14px;
            padding: 20px 10px 10px 0;
        }

        .name_black{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #9B9B9B!important;
            text-align: center;
            line-height: 14px;
            background: #F9F9F9;
        }
        td{
            border: 1px solid #D8D8D8;
            width: 200px;
            height: 40px;
            text-align: center;

            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #000000;
            text-align: center;
            line-height: 14px;
        }
        .butoton_box{
            display: flex;
            justify-content: center;
        }
    }

    .view_btn{
        cursor: pointer;
        background: #E6655F;
        border-radius: 22px;
        text-align: center;
        height: 28px;
        width: 100px;
        line-height: 28px;

        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
    }
    .content_search_for_mobile{
        .table_css  {
            margin-top: 10px;
            .tr_for_tab{
                width: 100%;
                background: #FFFFFF;
                border-top: 1px solid #E5E5E5;
                border-bottom: 1px solid #E5E5E5;
                font-family: PingFangSC-Regular;
                font-size: 11px;
                color: #9B9B9B;
                height: 35px;
            }
            tr{
                font-family: PingFangSC-Regular;
                font-size: 9px;
                color: #4E5056;
                border-bottom: 1px solid #ECECEC;;
                height: 42px;
                background: rgb(255,255,255);
                text-align: center;
            }
            tr:hover{
                background: #EEEEEE;
            }
        }
    }

    .butoton_box_ld{
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #E6655F!important;
        position: relative;
        bottom: 2px;
        left: 5px;
    }

    .ivu-date-picker-cells-cell-selected:hover em, .ivu-date-picker-cells-cell-selected em{
        background-color: #E6655F!important;
    }
    .ivu-date-picker-cells-focused em{
        box-shadow: inset 0 0 0 1px #E6655F!important;
    }
    .ivu-date-picker-cells-cell-today em:after{
        background:  #E6655F!important;
    }
    .ivu-input:focus, .ivu-input:hover{
        border-color: #E6655F!important;
    }
    .ivu-date-picker-focused input{
        border-color: #E6655F!important;
    }
    .ivu-input:focus{
        box-shadow: none!important;
    }

    button:hover{
        border-color: #E6655F!important;
    }

    button:focus{
        border-color: #E6655F!important;
    }
    button:visited{
        border:1px solid #E6655F!important;
    }

    input:hover{
        background: #FBFBFB!important;
        border: 1px solid #A4A0A2!important;
        border-radius: 2px!important;
    }
    input:focus{
        background: #FBFBFB!important;
        border: 1px solid #E6655F!important;
        border-radius: 2px!important;
     }
    input:visited{
        border:1px solid #E6655F!important;
    }


    .ivu-date-picker-cells-cell-range:before{
        background: #f3f6fb!important;
    }

    input:focus,button:active{
        outline:none!important;
    }
    .active{
        background-color: #E6655F!important;
    }
</style>
<template>
    <div>
        <div class="search_content computer">
            <baisis_msg></baisis_msg>
            <div class="detail_show" style="min-height: 860px">
                <div class="contents_detail">
                    <div class="title_tagss">
                        <div class="postitaons">
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                            <span style="cursor: pointer" @click="return_index()">首页</span>

                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                            <span>压力反应测试</span>
                        </div>
                        <div class="postitao_ctr">
                            <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-remind-"></i>
                            <span class="center_tlt">请选择报告</span>
                        </div>
                    </div>
                    <div class="title" style="background: #f8f8f9">
                        <div class="time_limit">
                            <div class="time_limit_p">
                                <div class="line_colss"></div>&nbsp;&nbsp;&nbsp;
                                <i style="font-size: 14px;color: #D8D8D8;margin-top: 7px" class="icon iconfont  icon-time-"></i>&nbsp;&nbsp;&nbsp;
                                <div class="name">
                                    送检时间:
                                </div>
                                <DatePicker  type="daterange" @on-change="time_search_value"  split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                            </div>

                            <div class="time_limit_confirm" @click="search_reset()">
                                <i style="font-size: 14px;color: #fff;margin-top: 7px" class="icon iconfont icon-search-"></i>&nbsp;&nbsp;重新搜索
                            </div>

                        </div>
                        <div class="line_fc"></div>
                        <div class="tables">
                            <table class="table_real">
                                <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>时间</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item,index) in table_return">
                                    <td style="width: 80px">{{index+1}}</td>
                                    <td style="font-size: 12px" v-if="item.scopeEndTime !== undefined">{{item.scopeEndTime}}</td>
                                    <td style="font-size: 12px" v-else>-</td>
                                    <td style="cursor: pointer;width: 200px" @click="view_caht(item)">
                                        <div class="view_btn">查看</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style="margin: 0 0 0 10px">
                            <el-pagination
                                    background
                                    layout="prev, pager, next"
                                    :current-page="page_now"
                                    :total="page_count">
                            </el-pagination>
                        </div>
                        <div class="buton_choise">

                        </div>
                    </div>

                </div>
            </div>

            <div class="box_logo_bottom" style="position: relative">
                <img height="30" src="../images/mindfrog.png" alt="">

                <span>
                &nbsp;&nbsp;&nbsp;&nbsp;Copyright © Mindfrog All rights reserved
            </span>
            </div>
            <!--弹框-->
            <Modal
                    v-model="modal6"
                    title="报告编号：13251"
                    :loading="loading"
                    @on-ok="asyncOK" width="1200">
                <div class="alert_css">
                    <div v-for="(item,index) in user_msg">
                        <div class="titles">
                            患者信息
                        </div>
                        <table>
                            <tbody>
                            <tr>
                                <td class="name_black">姓名</td><td>{{item.name}}</td>
                                <td class="name_black">性别</td><td>{{item.sex}}</td>
                                <td class="name_black">身高</td><td>{{item.heigth}}</td>
                            </tr>
                            <tr>
                                <td class="name_black">体重</td><td>{{item.heave}}</td>
                                <td class="name_black">年龄</td><td>{{item.age}}</td>
                                <td class="name_black">血型</td><td>{{item.xue}}</td>
                            </tr>
                            <tr>
                                <td class="name_black">过敏史</td><td>{{item.guo_ming}}</td>
                                <td class="name_black">病院编号</td><td>{{item.num}}</td>
                                <td class="name_black">患者类型</td><td>{{item.type}}</td>
                            </tr>
                            <tr>
                                <td class="name_black">送检科室</td><td>{{item.check_room}}</td>
                                <td class="name_black">诊断结果</td><td colspan="3" >{{item.result}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div slot="footer" style="text-align: center;margin: 10px 0 20px 0">
                    <div class="butoton_box">
                        <Button @click="exportData()" shape="circle" style="width: 140px"><i style="font-size: 20px;color: #D8D8D8;" class="icon iconfont icon-export-"></i><span class="butoton_box_ld">导出</span></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button @click="print()" shape="circle" style="width: 140px"><i style="font-size: 20px;color: #D8D8D8;" class="icon iconfont icon-print-"></i><span class="butoton_box_ld">打印</span></Button>
                    </div>

                </div>
            </Modal>
            <!--excel导出-->
            <Table hidden id="print_datas" size="small" :columns="columns1" :data="data1" ref="table"></Table>
        </div>
        <div class="mobile_phone content_search_for_mobile only_search_for_mobile">
            <basis_msg_mobile title_value="请选择送检时间范围"></basis_msg_mobile>
            <div class="box_range">
                <div class="title_f">
                    <i style="font-size: 4px;color: #D8D8D8;" class="icon iconfont icon-remind-"></i>&nbsp;&nbsp;
                    <span>送检时间</span>
                </div>
                <div class="time_select">
                    <div id="class_one">开始时间</div>
                    <div style="margin: 5px 10px 0 10px">-</div>
                    <div id="class_two">结束时间</div>
                    <div class="search" @click="search_list()">
                        <i style="font-size: 14px;color: #ffffff;position: relative;top: 6px;left: 15px" class="icon iconfont icon-search-"></i>
                    </div>
                </div>
            </div>
            <table class="table_css" style="width: 100%">
                <thead>
                    <tr class="tr_for_tab">
                        <th>报告编号</th>
                        <th>送检时间</th>
                        <th>报告时间</th>
                        <th>送检医生</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in table_list">
                        <td>{{item.num}}</td>
                        <td>{{item.check_time}}</td>
                        <td>{{item.come_time}}</td>
                        <td>{{item.doctor}}</td>
                        <td @click="route_mobile_to_alert(index)" style="padding-right: 5px"><i style="font-size: 15px;color: rgb(204,204,204);position: relative;top: 1px" class="icon iconfont icon-baogao-"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import baisis_msg from './basis_msg.vue';
    import basis_msg_mobile from './basis_msg_mobile.vue';
    import MobileSelect from 'mobile-select';
    import date from '../template/date.js';
    export default {
        data () {
            return {
                modal6: false,
                loading: true,
                start_search_time:'',
                end_search_time:'',
                table_list:[
                    {
                        num:123,
                        check_time:'2012-10-10',
                        come_time:'2015-10-12',
                        doctor:'黎明',
                        person:'小妹',
                        zi_duan:'111',
                        zi_duan_two:'222',
                        zi_duan_three:'333'
                    },
                    {
                        num:123,
                        check_time:'2012-10-10',
                        come_time:'2015-10-12',
                        doctor:'黎明',
                        person:'小妹',
                        zi_duan:'111',
                        zi_duan_two:'222',
                        zi_duan_three:'333'
                    },
                    {
                        num:123,
                        check_time:'2012-10-10',
                        come_time:'2015-10-12',
                        doctor:'黎明',
                        person:'小妹',
                        zi_duan:'111',
                        zi_duan_two:'222',
                        zi_duan_three:'333'
                    }
                ],
                user_msg:[
                    {
                        name:'张三',
                        sex:'男',
                        heigth:'172',
                        heave:'52kg',
                        age:'25',
                        xue:'O型',
                        guo_ming:'无',
                        num:'123',
                        type:'普通',
                        check_room:'科室一',
                        result:'正常'
                    },
                    {
                        name:'张三',
                        sex:'男',
                        heigth:'172',
                        heave:'52kg',
                        age:'25',
                        xue:'O型',
                        guo_ming:'无',
                        num:'123',
                        type:'普通',
                        check_room:'科室一',
                        result:'正常'
                    },
                    {
                        name:'张三',
                        sex:'男',
                        heigth:'172',
                        heave:'52kg',
                        age:'25',
                        xue:'O型',
                        guo_ming:'无',
                        num:'123',
                        type:'普通',
                        check_room:'科室一',
                        result:'正常'
                    }
                ],
                columns1:[
                    {
                        "title": "姓名",
                        "key": "name",
                    },
                    {
                        "title": "性别",
                        "key": "sex",
                    },
                    {
                        "title": "身高",
                        "key": "height",
                    },
                    {
                        "title": "体重",
                        "key": "heveay",
                    },
                    {
                        "title": "年龄",
                        "key": "age",
                    },
                    {
                        "title": "血型",
                        "key": "xue",
                    },
                    {
                        "title": "过敏史",
                        "key": "guo_ming",
                    },
                    {
                        "title": "病院编号",
                        "key": "num",
                    },
                    {
                        "title": "送检科室",
                        "key": "room_num",
                    },
                    {
                        "title": "诊断结果",
                        "key": "result",
                    },
                ],
                data1:[
                    {
                        "name": "Name1",
                        "sex": 0,
                        "height": 7302,
                        "heveay": 5627,
                        "age": 1563,
                        "xue": 4254,
                        "guo_ming": 1438,
                        "num": 274,
                        "room_num": 285,
                        "result": 1727,
                    },
                    {
                        "name": "Name1",
                        "sex": 0,
                        "height": 7302,
                        "heveay": 5627,
                        "age": 1563,
                        "xue": 4254,
                        "guo_ming": 1438,
                        "num": 274,
                        "room_num": 285,
                        "result": 1727,
                    },
                    {
                        "name": "Name1",
                        "sex": 0,
                        "height": 7302,
                        "heveay": 5627,
                        "age": 1563,
                        "xue": 4254,
                        "guo_ming": 1438,
                        "num": 274,
                        "room_num": 285,
                        "result": 1727,
                    },
                ],
                /*接口返回的数据*/
                table_return:[

                ],
                /*总共有多少页*/
                page_count:1000,
                /*现在的页数*/
                page_now:2
            }
        },

        components:{
            baisis_msg,
            basis_msg_mobile
        },
        beforeCreate(){

            //路由拿到的参数，请使用这个
            console.log(JSON.parse(this.$route.query.page_show));
            var get_json=JSON.parse(this.$route.query.page_show);
            const that=this;
            $.ajax({
                url:"http://api.mindfrog.cn/api/ProjectData/ListUserProjectScopes?UserId=test01&ProjectId="+get_json.id+"&ScopeId=string&DataType=json&MaxResultCount=10&SkipCount=10",
                type:'get',
                dataType:'JSON',
                success:function (data) {
                    that.table_return=data;
                },
                error:function (data) {

                }
            })

        },
        mounted(){
            const that=this;
            $(".ivu-modal-header-inner").css({
                'font-family': 'PingFangSC-Medium',
                'font-size': '18px',
                'color': '#000000'
            });
            new MobileSelect({
                trigger: "#class_one",
                title: '开始时间',
                wheels: [
                    {data:date.date()}
                ],
                position:[0,1],
                callback:function(indexArr, data){
                    console.log(data); //返回选中的json数据
                    that.start_search_time=data;
                }
            });
            new MobileSelect({
                trigger: "#class_two",
                title: '结束时间',
                wheels: [
                    {data:date.date()}
                ],
                position:[0,1],
                callback:function(indexArr, data){
                    console.log(data); //返回选中的json数据

                    that.end_search_time=data;
                }
            });
        },
        methods:{
            exit(){

            },
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            },
            click_alert(e){
                /*e表示当前点击的是第几个参数*/
                this.modal6 = true
            },
            view_caht(e){
                /*e为要传递的参数*/
                let get_json=JSON.parse(this.$route.query.page_show);
                let datas={
                    data: e,
                    product:get_json
                };
                console.log(datas);
                datas=JSON.stringify(datas);
                this.$router.push({ name: 'echart', query: this.$route.query})
            },
            pai_ming(){
                this.$router.push({ name: 'sort', params: { userId: 123 }})
            },
            search_reset(){
                //开始时间
                const start_time=this.start_search_time;
                //结束时间
                const end_time=this.end_search_time;

            },
            time_search_value(e){
                this.start_search_time=e[0];
                this.end_search_time=e[1];
            },
            radio_array(e){
                console.log(e);
            },
            /*导出数据*/
            exportData () {
                this.$refs.table.exportCsv({
                    filename: 'The original data'
                });
            },
            /*打印*/
            print(){
                // 打开一个新窗口
                const myWindow = window.open('', '标题');

                // 获取id为app内的html
                const $print_datas=$("#print_datas");
                $print_datas.find('table').css({'width':'100%'});
                const bodyHtml = $print_datas.html();

                // 获取head标签内的html
                let headHtml = document.head.innerHTML;

                // 头中的screen换成打印样式print
                headHtml = headHtml.replace('screen', 'screen, print');

                //重新写入文档流
                myWindow.document.write('<html>');
                myWindow.document.write(headHtml);
                myWindow.document.write('<body');
                myWindow.document.write(bodyHtml);
                myWindow.document.write('<script>setTimeout(function() {window.print();window.close()}, 500)</');
                myWindow.document.write('script>');
                myWindow.document.write('</body></html>');

            },
            /*移动端alert路由*/
            route_mobile_to_alert(index){

                this.$router.push({ name: 'index', params: { userId: 123 }})
            },

            return_index(){
                this.$router.push({ name: 'index', params: { userId: 123 }})
            }
        }
    }
</script>
