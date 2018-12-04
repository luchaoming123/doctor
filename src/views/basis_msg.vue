<style scope>
    body{
        background: #FAFAFA;
        background-image: none
    }
    .box_all{
        .aside{
            width: 16%;
            z-index: 100;
            position: fixed;
            left: 0;
            height: 100%;
            top: 64px;
            background: #F5F5F5;
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.10);
            padding: 0 25px;
            font-family: HelveticaNeue-Medium;
            font-size: 12px;
            color: #4E5056;
            text-align: center;
            line-height: 14px;
            border-right: 1px solid #d8d8d8;
            .line_ss{
                background: #ECECEC;
                height: 1px;
            }
            .name{
                text-align: left;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #9B9B9B;
                line-height: 14px;
            }
            .valus_{
                text-align: right;
                font-family: HelveticaNeue-Medium;
                font-size: 12px;
                color: #4E5056;
                text-align: right;
                line-height: 14px;
            }
            .name_large{
                text-align: center;
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #4E5056;
                letter-spacing: 0.67px;
                line-height: 26px;
            }
            .imgs{
                border-radius: 50%;
                width: 80px;
                height: 80px;
            }
        }
        .box_content{
            background: #373737;
            height: 64px;
            .tops_title_fixed{
                width: 100%;
                background: #373737;
                height: 64px;
                position: fixed;
                top:0;
                z-index: 100;
            }
            .tops_title{
                display: flex;
                height: 64px;
                justify-content: space-between;
                .tops_title_one{
                    display: flex;
                    align-items: center;
                    .diatitle{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding-left: 10px;
                        .titles{
                            font-size: 16px;
                            font-family: HelveticaNeue-Medium;
                            font-size: 16px;
                            color: #FFFFFF;
                            letter-spacing: 0.67px;
                            line-height: 26px;
                        }
                        .titles_alias{
                            font-family: PingFangSC-Regular;
                            font-size: 8px;
                            color: #A4A0A2;
                            letter-spacing: 0.2px;
                        }
                    }

                }
                .tops_title_two{
                    font-family: HelveticaNeue;
                    font-size: 12px;
                    color: #A4A0A2;
                    text-align: right;
                    line-height: 64px;
                    padding-right: 50px;
                    cursor: pointer;
                    i{
                        color: #D8D8D8;
                        position: relative;
                        top:3px;
                    }
                }

            }
            .tops{
                background-color: #ffffff;
                padding:6px 20px 6px 20px;
                margin: 0 -20px;
            }
            .contents_detail{
                margin-top: 20px;
            }
        }

    }

    .title_tagss{
        position: fixed;
        z-index: 100;
    }
    .title{
        margin: 70px 20px 20px 20px!important;
    }
</style>
<template>
    <div class="box_all">
        <div class="aside">
            <br>
            <br>
            <div class="demo-avatar">
                <img class="imgs" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
            </div>
            <br>
            <Row>
                <Col class="name_large" span="24">
                {{basis_msg.name}}
                <i v-if="basis_msg.sex == '男'" style="font-size: 14px;color: rgb(110,121,238)" class="icon iconfont icon-man-"></i>
                <i v-else style="font-size: 14px;color: #E6655F" class="icon iconfont icon-woman-"></i>
                </Col>
            </Row>
            <br>
            <br>
            <br>
            <div class="line_ss"></div>
            <br>
            <Row>
                <Col class="name" span="12">身高：</Col>
                <Col class="valus_" span="12">{{basis_msg.heigth}}</Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">体重：</Col>
                <Col class="valus_" span="12">{{basis_msg.heave}}</Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">年龄：</Col>
                <Col class="valus_" span="12">{{basis_msg.age}}</Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">血缘：</Col>
                <Col class="valus_" span="12">{{basis_msg.xue}}</Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">过敏源：</Col>
                <Col class="valus_" span="12">{{basis_msg.guo_ming}}</Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">病院编号：</Col>
                <Col class="valus_" span="12">{{basis_msg.num}}</Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">患者类型：</Col>
                <Col class="valus_" span="12">{{basis_msg.type}}</Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">送检科室：</Col>
                <Col class="valus_" span="12">{{basis_msg.check_room}}</Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">诊断结果：</Col>
            </Row>
            <Row>
                <br>
                <Col class="valus_" style="text-align: left" span="12">{{basis_msg.result}}</Col>
            </Row>
            <br>

        </div>
        <div class="box_content">
            <div class="tops_title">

            </div>
            <div class="tops_title tops_title_fixed">
                <div class="tops_title_one">
                    <!--<i style="font-size: 40px;margin-left: 10px" class="icon iconfont icon-danao-&#45;&#45;"></i>-->
                    <img  height="40" width="40" src="../images/danao-2-01-01.png" alt="">
                    <div class="diatitle">
                        <div class="titles">
                            脑认知数据平台
                        </div>
                        <div class="titles_alias">
                            Brain cognitive data platfrom
                        </div>
                    </div>
                </div>
                <div class="tops_title_two">
                    <i style="font-size: 20px;" class="icon iconfont icon-logout-"></i>
                    &nbsp;
                    <span>退出当前患者档案</span>
                </div>
            </div>
            <br>

        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        data () {
            return {
                theme3: 'dark',
                basis_msg:{
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
            }
        },
        mounted(){
            $("body").css({
                'background-image':"none",
                'background':'#FAFAFA'
            })
        },
        methods:{
            exit(){

            }
        }
    }
</script>
