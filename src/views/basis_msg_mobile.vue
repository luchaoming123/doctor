<style scope>

    .mobile_top{
        height: 50px;
        width: 100%;
        background: #373737;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left{
            display: flex;

            .imgs{
                width: 25px;
                height: 25px;
                border-radius: 50%;
                margin-left: 5px;
            }
        }
        .center{
            display: flex;
            .words{
                display: flex;
                flex-direction: column;
                .words_one{
                    font-family: HelveticaNeue-Medium;
                    font-size: 12px;
                    color: #FFFFFF;
                    letter-spacing: 0.5px;
                    line-height: 13px;
                }
                .words_two{
                    font-family: PingFangSC-Regular;
                    font-size: 6px;
                    color: #A4A0A2;
                    letter-spacing: 0.15px;
                }
            }
        }
        .right{

        }

    }

    .line_css_mobile{
        height: 2px;
        width: 100%;
        background: #E6655F;
    }
    .title_mobile{
        background: #FFFFFF;
        border-bottom: 1px solid #ECECEC;
        height: 31px;
        width: 100%;
        display: flex;
        justify-content: center;

        font-family: PingFangSC-Regular;
        font-size: 9px;
        color: #9B9B9B;
        align-items: center;
    }

    .msg_for_user{
        position: fixed;
        height: 100%;
        width: 100%;
        top:52px;
        overflow-y: auto;
        background: rgba(0,0,0,0.64);
        z-index: 100;
        .contents_for{
            margin: 20px 75px 30px 20px;
            background: #FFFFFF;
            border: 1px solid #ECECEC;
            box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
            position: relative;
            padding: 16px;
            .icon_v{
                border-top: 1px solid #ECECEC;
                border-left: 1px solid #ECECEC;
                height: 12px;
                background: #ffffff;
                width: 12px;
                transform: rotate(45deg);
                position: absolute;
                top: -6px;
                left: 30px;
            }
            .title_img_one{
                display: flex;
                justify-content: space-between;
                .tiel_lef{
                    display: flex;
                    .imgs{
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }
                    .name{
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #4E5056;
                        letter-spacing: 0.6px;
                        line-height: 50px;
                        margin:0 10px;
                    }
                }

            }
            .line_css_wod{
                background: #ECECEC;
                height: 1px;
                width: 100%;
                margin: 15px 0 5px 0;
            }
            .show_your_msg{
                .titel_name{
                    display: flex;
                    justify-content: space-between;
                    height: 30px;
                    line-height: 30px;
                    .title_left_{
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #9B9B9B;
                    }
                    .title_rihgt_{
                        font-family: HelveticaNeue-Medium;
                        font-size: 12px;
                        color: #4E5056;
                    }
                }
                .result_mob{
                    font-family: HelveticaNeue-Medium;
                    font-size: 12px;
                    color: #4E5056;
                }
            }
        }
    }


    body{
        background: #FAFAFA;
        background-image: none
    }
</style>
<template>
    <div>
        <div class="mobile_top">
            <div class="left" >
                <i  style="font-size: 15px;color: #D8D8D8;" class="icon iconfont icon-last-"></i>
                <img class="imgs" @click="show_us()" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
            </div>
            <div class="center">
                <img  height="25" width="25" style="margin: 2px 5px 0 0" src="../images/danao-2-01-01.png" alt="">
                <div class="words">
                    <div class="words_one">
                        脑认知数据平台
                    </div>
                    <div class="words_two">
                        Brain cognitive data platfrom
                    </div>
                </div>
            </div>
            <div class="right">
                <i style="font-size: 17px;color: #D8D8D8" class="icon iconfont icon-logout-"></i>
            </div>
        </div>
        <div class="line_css_mobile"></div>
        <div class="title_mobile" v-if="title_value !== '无'">
            <i style="font-size: 10px;color: #D8D8D8;" class="icon iconfont icon-remind-"></i>
            &nbsp;
            <span>{{title_value}}</span>
        </div>
        <!--用户信息-->
        <div class="msg_for_user" v-if="show_if_user_msg">
            <div class="contents_for">
                <div class="icon_v"></div>
                <div class="title_img_one">
                    <div class="tiel_lef">
                        <img class="imgs" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
                        <div class="name">{{basis_msg.name}}</div>
                        <i  v-if="basis_msg.sex == '男'" style="font-size: 14px;color: rgb(110,121,238);margin-top: 15px" class="icon iconfont icon-man-"></i>
                        <i  v-else style="font-size: 14px;color: #E6655F;margin-top: 15px" class="icon iconfont icon-woman-"></i>
                    </div>

                    <i  @click="cancel()" style="font-size: 20px;color: rgb(230,101,95);" class="icon iconfont icon-close-"></i>
                </div>
                <div class="line_css_wod"></div>
                <div class="show_your_msg">
                    <div class="titel_name">
                        <div class="title_left_">身高</div> <div class="title_rihgt_">{{basis_msg.heigth}}</div>
                    </div>
                    <div class="titel_name">
                        <div class="title_left_">体重</div> <div class="title_rihgt_">{{basis_msg.heave}}</div>
                    </div>
                    <div class="titel_name">
                        <div class="title_left_">年龄</div> <div class="title_rihgt_">{{basis_msg.age}}</div>
                    </div>
                    <div class="titel_name">
                        <div class="title_left_">血型</div> <div class="title_rihgt_">{{basis_msg.xue}}</div>
                    </div>
                    <div class="titel_name">
                        <div class="title_left_">过敏史</div> <div class="title_rihgt_">{{basis_msg.guo_ming}}</div>
                    </div>
                    <div class="titel_name">
                        <div class="title_left_">病员编号</div> <div class="title_rihgt_">{{basis_msg.num}}</div>
                    </div>
                    <div class="titel_name">
                        <div class="title_left_">送检科室</div> <div class="title_rihgt_">{{basis_msg.check_room}}</div>
                    </div>
                    <br>
                    <div class="titel_name">
                        <div class="title_left_">诊断结果</div>
                    </div>
                    <div class="result_mob">{{basis_msg.result}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';
    export default{
        data () {
            return {
                show_if_user_msg:false,
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
        props:[
            'title_value'
        ],
        components:{

        },
        mounted(){
            $("body").css({
                'background-image':"none",
                'background':'#FAFAFA'
            })
        },
        methods:{
            show_us(){
                this.show_if_user_msg=true;
            },
            cancel(){
                this.show_if_user_msg=false;
            }
        }
    }
</script>