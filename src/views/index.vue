<style scope>

    .index_all{
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
                background: #FAFAFA;
                .box_centr{
                    background: #FAFAFA;
                    display: flex;
                    justify-content:flex-start;
                    flex-wrap: wrap;
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
                                position: relative;
                            }

                        }
                        .boxs_btns{
                            margin-top: 30px;
                            display: flex;
                            justify-content: flex-start;
                            flex-wrap: wrap;
                            .click_btn{
                                background: #FFFFFF;
                                border: 1px solid #E7E7E7;
                                border-radius: 22px;
                                width: 30%;
                                margin: 5px;
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
                        .name_color_read{
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: rgb(110,121,238);
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
    }

    .box_flowing{
        display: flex;
    }
    .xu_ni{
        width: 16%;
        height: 860px!important;
    }


    .box_logo_bottom{
        display: flex;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #A4A0A2;
        letter-spacing: 0.67px;
        line-height: 30px;
        margin-left: 30px;
        padding-bottom: 30px;
        background: #FAFAFA;
        .xu_ni_new{
            width: 16%;
        }
    }


    .index_for_mobile{
        .box_for_item{
            background: #FFFFFF;
            border: 1px solid #ECECEC;
            box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
            margin:  20px 20px 0 20px;
            padding: 10px 15px;
            .box_one{
                display: flex;
                justify-content: space-between;
                .title_vr_left{
                    display: flex;
                    .title_vr{
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #000000;
                    }
                    .line_left{
                        width: 2px;
                        height: 10px;
                        background: #E6655F;
                        position: relative;
                        left: -15px;
                        top: 6px;
                    }
                }
            }
            .box_two{
                margin: 10px 0 15px 0;
                display: flex;
                justify-content: space-between;
                .box_two_left{
                    display: flex;
                    .box_num_name{
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: #9B9B9B;
                        line-height: 14px;
                    }
                    .box_num{
                        font-family: HelveticaNeue;
                        font-size: 11px;
                        color: #000000;
                        line-height: 14px;
                    }
                }
                .box_two_center{
                    display: flex;
                    .box_num_name{
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: #9B9B9B;
                        line-height: 14px;
                    }
                }
                .box_two_right{
                    display: flex;
                    .time{
                        font-family: HelveticaNeue;
                        font-size: 11px;
                        color: #000000;
                        line-height: 14px;
                    }
                    .if_read{
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: #E6655F;
                        line-height: 14px;
                    }
                    .if_read_f{
                        font-family: PingFangSC-Regular;
                        font-size: 11px;
                        color: rgb(110,121,238);
                        line-height: 14px;
                    }
                }
            }
            .box_three{
                background: #FFFFFF;
                border: 1px solid #E7E7E7;
                border-radius: 15px;
                width: 100%;
                height: 30px;
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #E6655F;
                cursor: pointer;
                text-align: center;
                line-height: 30px;
            }
        }
    }
    body{
        height: 100% !important;
        position: relative!important;
        padding: 0 0 60px 0;
    }
    html{
        height: 100% !important;
    }
    .box_logo_bottom{
        position: absolute;
        bottom: 0;
    }
</style>
<template>
    <div>
        <div class="index_all computer">
            <div>
                <baisis_msg></baisis_msg>

                <div class="box_flowing">
                    <div class="contents_detail">
                        <div class="title_tagss">
                            <div class="postitaons">
                                <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>


                                <span style="cursor: pointer" @click="return_index()">首页</span>
                            </div>
                            <div class="postitao_ctr">
                                <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-remind-"></i>
                                <span class="center_tlt">请选择测试项目</span>
                            </div>
                        </div>
                        <div class="title" style="background: #f8f8f9">
                            <Row class="box_centr">
                                <Col span="8" v-for="(item,index) in product_list">
                                    <div class="box_ant" shadow>
                                    <div class="title_name">
                                        <div class="tsts">
                                            <div class="line_col"></div>
                                            <span>{{item.project.name}}</span>
                                        </div>
                                        <div class="naids">
                                            <img width="60" height="60" src="../images/fuchan-01.png" alt="">
                                        </div>
                                    </div>
                                    <div class="boxs_btns">
                                        <Button v-for="(item_two,index_two) in item.project.projectModes" class="click_btn" @click="view_data_route(item)" type="primary" shape="circle">{{item_two.displayName}}</Button>
                                    </div>
                                </div>
                                </Col>
                                <!--<Col span="8">
                                    <div class="box_ant" shadow>
                                        <div class="title_name">
                                            <div class="tsts">
                                                <div class="line_col"></div>
                                                <span>康复室</span>
                                            </div>
                                            <div class="naids">
                                                &lt;!&ndash;<i style="font-size: 60px;color: #D8D8D8;" class="icon iconfont icon-fuchan-"></i>&ndash;&gt;
                                                <img width="60" height="60" src="../images/fuchan-01.png" alt="">
                                            </div>
                                        </div>
                                        <div class="boxs_btns">
                                            <Button class="click_btn" @click="view_data_route('room_first')" type="primary" shape="circle">CPT</Button>
                                            <Button class="click_btn" @click="view_data_route('room_two')" type="primary" shape="circle">Stroop Test</Button>
                                            <Button class="click_btn" @click="view_data_route('room_three')" type="primary" shape="circle">Audio</Button>
                                        </div>
                                        <div class="boxs_btns">
                                            <Button class="click_btn" @click="view_data_route('room_four')" type="primary" shape="circle">Visual</Button>
                                            <Button class="click_btn" @click="view_data_route('room_five')" type="primary" shape="circle">WordPair</Button>
                                            <Button class="click_btn" @click="view_data_route('room_six')" type="primary" shape="circle">WCST</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col span="8">
                                    <div class="box_ant" shadow>
                                    <div class="title_name">
                                        <div class="tsts">
                                            <div class="line_col"></div>
                                            <span>虚拟教室</span>
                                        </div>
                                        <div class="naids">
                                            &lt;!&ndash;<i style="font-size: 60px;color: #D8D8D8;" class="icon iconfont icon-fuchan-"></i>&ndash;&gt;
                                            <img width="60" height="60" src="../images/fuchan-01.png" alt="">
                                        </div>
                                    </div>
                                    <div class="boxs_btns">
                                        <Button class="click_btn" @click="view_data_route('room_first')" type="primary" shape="circle">CPT</Button>
                                        <Button class="click_btn" @click="view_data_route('room_two')" type="primary" shape="circle">Audio</Button>
                                        <Button class="click_btn" @click="view_data_route('room_three')" type="primary" shape="circle">WCST</Button>
                                    </div>
                                </div>
                                </Col>
                                <Col span="8">
                                    <div class="box_ant" shadow>
                                    <div class="title_name">
                                        <div class="tsts">
                                            <div class="line_col"></div>
                                            <span>超市</span>
                                        </div>
                                        <div class="naids">
                                            &lt;!&ndash;<i style="font-size: 60px;color: #D8D8D8;" class="icon iconfont icon-fanying-"></i>&ndash;&gt;
                                            <img width="60" height="60" src="../images/fanying-01.png" alt="">
                                        </div>
                                    </div>
                                    <div class="boxs_btns" style="justify-content: flex-start">
                                        <Button class="click_btn" @click="view_data_route('shop_one')" type="primary" style="margin-right: 20px" shape="circle">货架模式</Button>
                                        <Button class="click_btn" @click="view_data_route('shop_two')" type="primary" shape="circle">标准模式</Button>
                                    </div>
                                </div>
                                </Col>-->
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box_logo_bottom">
                <img height="30" src="../images/mindfrog.png" alt="">

                <span>
                &nbsp;&nbsp;&nbsp;&nbsp;Copyright © Mindfrog All rights reserved
            </span>
            </div>
        </div>
        <div class="mobile_phone index_for_mobile">
            <basis_msg_mobile title_value="请选择项目测试"></basis_msg_mobile>
            <div class="box_for_item">
                <div class="box_one">
                    <div class="title_vr_left">
                        <div class="line_left"></div>
                        <div class="title_vr">VR产检</div>
                    </div>
                    <img width="30" height="30" src="../images/fuchan-01.png" alt="">
                </div>
                <div class="box_two">
                    <div class="box_two_left">
                        <i style="font-size: 10px;color: #D8D8D8;margin-top:-1px;" class="icon iconfont icon-baogao-"></i>&nbsp;

                        <span class="box_num_name">报告数量</span>
                        &nbsp;&nbsp;
                        <span class="box_num">{{view_data.first.num}}</span>
                    </div>
                    <div class="box_two_center">
                        <i style="font-size: 10px;color: #D8D8D8;margin-top:-1px;" class="icon iconfont icon-zuixin-"></i>&nbsp;
                        <span class="box_num_name">最新报告</span>
                    </div>
                    <div class="box_two_right">
                        <span class="time">{{view_data.first.time}}</span>
                        &nbsp;&nbsp;
                        <span class="if_read" v-if="view_data.first.if_read == false">(未读)</span>
                        <span class="if_read_f" v-else>(已读)</span>
                    </div>
                </div>
                <div class="box_three" @click="view_data_route('first')">
                    查看报告
                </div>
            </div>
            <div class="box_for_item">
                <div class="box_one">
                    <div class="title_vr_left">
                        <div class="line_left"></div>
                        <div class="title_vr">压力反应测试</div>
                    </div>
                    <img width="30" height="30" src="../images/fanying-01.png" alt="">
                </div>
                <div class="box_two">
                    <div class="box_two_left">
                        <i style="font-size: 10px;color: #D8D8D8;margin-top:-1px;" class="icon iconfont icon-baogao-"></i>&nbsp;

                        <span class="box_num_name">报告数量</span>
                        &nbsp;&nbsp;
                        <span class="box_num">{{view_data.second.num}}</span>
                    </div>
                    <div class="box_two_center">
                        <i style="font-size: 10px;color: #D8D8D8;margin-top:-1px;" class="icon iconfont icon-zuixin-"></i>&nbsp;
                        <span class="box_num_name">最新报告</span>
                    </div>
                    <div class="box_two_right">
                        <span class="time">{{view_data.second.time}}</span>
                        &nbsp;&nbsp;
                        <span class="if_read" v-if="view_data.second.if_read == false">(未读)</span>
                        <span class="if_read_f" v-else>(已读)</span>
                    </div>
                </div>
                <div class="box_three" @click="view_data_route('second')">
                    查看报告
                </div>
            </div>
            <div class="box_for_item">
                <div class="box_one">
                    <div class="title_vr_left">
                        <div class="line_left"></div>
                        <div class="title_vr">VR体能测试</div>
                    </div>
                    <img width="30" height="30" src="../images/tinengceshi-01.png" alt="">
                </div>
                <div class="box_two">
                    <div class="box_two_left">
                        <i style="font-size: 10px;color: #D8D8D8;margin-top:-1px;" class="icon iconfont icon-baogao-"></i>&nbsp;

                        <span class="box_num_name">报告数量</span>
                        &nbsp;&nbsp;
                        <span class="box_num">{{view_data.third.num}}</span>
                    </div>
                    <div class="box_two_center">
                        <i style="font-size: 10px;color: #D8D8D8;margin-top:-1px;" class="icon iconfont icon-zuixin-"></i>&nbsp;
                        <span class="box_num_name">最新报告</span>
                    </div>
                    <div class="box_two_right">
                        <span class="time">{{view_data.third.time}}</span>
                        &nbsp;&nbsp;
                        <span class="if_read" v-if="view_data.third.if_read == false">(未读)</span>
                        <span class="if_read_f" v-else>(已读)</span>
                    </div>
                </div>
                <div class="box_three" @click="view_data_route('third')">
                    查看报告
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import baisis_msg from './basis_msg.vue';
    import basis_msg_mobile from './basis_msg_mobile.vue';
    export default {
        data () {
            return {
                theme3: 'dark',
                view_data:{
                    first:{
                        num:12,
                        time:'2015-10-10',
                        if_read:true
                    },
                    second:{
                        num:12,
                        time:'2015-10-10',
                        if_read:false
                    },
                    third:{
                        num:12,
                        time:'2015-10-10',
                        if_read:false
                    },
                },
                /*接口返回的数据*/

                product_list:[
                    {
                        "userId": "string",
                        "project": {
                            "name": "虚拟教室",
                            "projectVersions": [],
                            "projectModes": [
                                {
                                    "name": "CPT",
                                    "displayName": "CPT"
                                },
                                {
                                    "name": "WCST",
                                    "displayName": "WCST"
                                },
                                {
                                    "name": "Audio",
                                    "displayName": "Audio"
                                }
                            ],
                            "id": "vrclassroom"
                        }
                    },
                    {
                        "userId": "string",
                        "project": {
                            "name": "老年康复室",
                            "projectVersions": [],
                            "projectModes": [
                                {
                                    "name": "CPT",
                                    "displayName": "CPT"
                                },
                                {
                                    "name": "WCST",
                                    "displayName": "WCST"
                                },
                                {
                                    "name": "Audio",
                                    "displayName": "Audio"
                                },
                                {
                                    "name": "StroopTest",
                                    "displayName": "StroopTest"
                                },
                                {
                                    "name": "Visual",
                                    "displayName": "Visual"
                                },
                                {
                                    "name": "WordPairTest",
                                    "displayName": "WordPairTest"
                                }
                            ],
                            "id": "rehabilitation"
                        }
                    },
                    {
                        "userId": "string",
                        "project": {
                            "name": "超市",
                            "projectVersions": [],
                            "projectModes": [
                                {
                                    "name": "Standard",
                                    "displayName": "标准模式"
                                },
                                {
                                    "name": "Shelves",
                                    "displayName": "货架模式"
                                }
                            ],
                            "id": "supermarket"
                        }
                    },
                    {
                        "userId": "string",
                        "project": {
                            "name": "测试项目1",
                            "projectVersions": [],
                            "projectModes": [],
                            "id": "testproject"
                        }
                    },
                    {
                        "userId": "string",
                        "project": {
                            "name": "测试项目2",
                            "projectVersions": [],
                            "projectModes": [],
                            "id": "testlabdata"
                        }
                    }
                ]
            }
        },
        components:{
            baisis_msg,
            basis_msg_mobile
        },
        beforeCreate(){
            const that=this;
            $.ajax({
                url:'/api/ProjectData/ListUserProjects',
                type:'post',
                data:{
                    input:{
                        "userId": "vrclassroom"
                    }
                },
                dataType:'JSON',
                success:function (data) {
                    that.product_list=data;
                },
                error:function (data) {

                }
            })
        },
        methods:{
            exit(){

            },
            view_data_route(e){
                this.$router.push({ name: 'search', params: { page_show: e }})
            },
            return_index(){
                this.$router.push({ name: 'index', params: { userId: 123 }})
            }
        }
    }
</script>
