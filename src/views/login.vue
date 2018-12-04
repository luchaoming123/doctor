<style scope>
    @import "../font/demo.css";
    @import "../font/iconfont.css";

    /*适配移动端*/
    @media only screen and (max-width: 900px) {
        .computer {
            display: none!important;
        }
        .mobile_phone{
            display: block!important;
        }
        .el-picker-panel{
            display: none!important;
        }
        .login_on{
            margin:0 20px!important;
            .form{
                width: 100%!important;
                margin: 35px 0!important;
                height: 200px!important;
                .title_remind{
                    width: 100%!important;
                }
                .input_val{
                    width: 100%!important;
                    .input_class{
                        width: 100%!important;
                        height: 36px!important;
                    }
                }
                .button_clil{
                    width: 100%!important;
                    .button_clil_button{
                        width: 100%!important;
                    }
                }
            }
            .navigation{
                bottom: 25px!important;
                font-size: 6px!important;
                letter-spacing: 0.3px!important;
                line-height: normal!important;
                img{
                    height: 20px!important;
                }

            }
        }

        .fixWidth .title{
            margin-top: 5px!important;
        }
    }
    .mobile_phone{
        display: none;
    }
    body{
        background-image: url("../images/bg_login.png")
    }
    .login_on{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .logo_{
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 50px;
            .logo_name{

                font-family: HelveticaNeue-Medium;
                font-size: 24px;
                color: #4E5056;
                letter-spacing: 1px;
                line-height: 26px;
            }
            .logo_words{
                color: #A4A0A2;
                font-size: 12px;
                font-family: 'PingFangSC-Regular';
                line-height: 17px;
                word-spacing: 0.67px;
                margin-top: 10px;
            }
        }
        .form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 60px;
            height: 280px;
            width: 480px;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            background: #FFFFFF;
            border: 1px solid #E5E5E5;
            box-shadow: 0 4px 14px 0 rgba(0,0,0,0.10);
            .title_remind{
                margin: 30px 0 0 0;
                width: 380px;
                text-align: left;
                font-family: HelveticaNeue;
                font-size: 14px;
                color: #9B9B9B;
                line-height: 14px;
            }
            .input_val{
                margin: 10px 0;
                .input_class{
                    background: #FBFBFB;
                    border: 1px solid #EAEAEA;
                    border-radius: 2px;
                    height: 48px;
                    width: 380px;

                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #4E5056;
                    line-height: 14px;
                    padding: 10px;
                }
                .input_class:focus{
                    border-color: #E6655F!important;
                }
            }
            .button_clil{
                margin: 30px 0;
                .button_clil_button{
                    background: #E6655F;
                    border-radius: 30px;
                    height: 48px;
                    width: 380px;
                    font-family: FZLTZHK--GBK1-0;
                    font-size: 16px;
                    color: #FFFFFF;
                    line-height: 16px;
                    border: 1px solid #E5E5E5;
                    cursor: pointer;
                }
            }
            .icon_top{
                display: flex;
                .top_left{
                    width: 100px;
                    height: 100px;
                    background-color: #e6e6e6;
                    border-radius: 6px;
                    color: #ffffff;
                    font-size: 16px;
                    line-height: 100px;
                    text-align: center;
                }
                .line_column{
                    height: 100px;
                    width: 4px;
                    border-radius: 6px;
                    background-color: #2baee9;
                    margin: 0 20px;
                }
                .words{
                    font-size: 20px;
                    font-weight: bold;
                    width: 150px;
                }
            }
        }
        .navigation{
            position: fixed;
            bottom: 40px;
            text-align: center;
            display: flex;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #A4A0A2;
            letter-spacing: 0.67px;
            line-height: 30px;
        }
    }



    input:focus{
        border: 1px solid #E6655F!important;
    }
</style>
<template>
    <div>
        <div class="login_on">
            <div class="logo_">
                <!--<i style="font-size: 100px;" class="icon iconfont icon-danao-&#45;&#45;"></i>-->
                <img  height="100" width="100" style="margin: 0 auto" src="../images/danao-2-01-01.png" alt="">
                <div class="logo_name">
                    脑认知数据平台
                </div>
                <div class="logo_words">
                    BRAIN COGNITIVE DATA PLATFORM
                </div>
            </div>
            <div class="form">
                <div class="title_remind" >
                    <i style="font-size: 20px;position: relative;top: 2px;color: #D8D8D8;" class="icon iconfont icon-zhanghao-"></i>
                    &nbsp;&nbsp;请输入用户编号：
                </div>
                <div class="input_val">
                    <input type="text" v-model="value_num" class="input_class" style="height: 48px">
                </div>
                <div class="button_clil">
                    <Button class="button_clil_button" @click="login_submit()" type="primary" shape="circle">开始查询</Button>
                </div>
            </div>
            <div class="navigation">
                <img height="30" src="../images/mindfrog.png" alt="">

                <span>
                &nbsp;&nbsp;&nbsp;&nbsp;Copyright © Mindfrog All rights reserved
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import url_img from '../images/bg_login.png';
    export default {
        data () {
            return {
                theme3: 'dark',
                value_num:''
            }
        },
        components:{

        },
        mounted(){
            $("body").css({
                'background-image':"url('"+url_img+"')"
            })
        },
        methods:{
            exit(){

            },
            login_submit(){
                var that=this;
                if($.trim(that.value_num) == ''){
                    this.$Message.error('请先填写要查询的编号');
                    return false;
                }
                that.$router.push({ name: 'date', params: { userId: 123 }})

            }
        }
    }
</script>
