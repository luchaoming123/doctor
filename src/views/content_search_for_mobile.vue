<style scope>
   .table_show_us{
       margin: 10px 15px;
       padding: 10px;
       background: #FFFFFF;
       border: 1px solid #ECECEC;
       box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
       .title_mob{
           font-family: PingFangSC-Medium;
           font-size: 14px;
           color: #000000;
           margin-bottom: 10px;
            display: flex;
           .line_red_lef{
               height: 10px;
               width: 2px;
               position: relative;
               left: -10px;
               top:6px;
               background-color: #E6655F;
           }
       }
       .title_title{
           font-family: PingFangSC-Regular;
           font-size: 12px;
           color: #4E5056;
           padding: 5px 0;
       }
       .hopital_name{
           font-family: PingFangSC-Regular;
           font-size: 12px;
           color: #4E5056;
           line-height: 7px;
           height: 20px;
       }
       .line_css_mob{
           background: #ECECEC;
           height: 1px;
           width: 100%;
           margin-bottom: 5px;
       }
       .rebak_to_search{
           background: #FFFFFF;
           border: 1px solid #E7E7E7;
           border-radius: 15px;
           height: 30px;
           cursor: pointer;
           text-align: center;
           line-height: 30px;
           margin: 0 10px;
       }
       .msg_for_hopital{
           height: 30px;
           line-height: 30px;
           display: flex;
           justify-content: space-between;
           font-size: 12px;
           color: #9B9B9B;
           .value_msg{
               font-family: PingFangSC-Regular;
               font-size: 12px;
               color: #000000;
               text-align: right;
           }
       }
   }
</style>
<template>
    <div>
        <div class="mobile_phone">
            <basis_msg_mobile title_value="无"></basis_msg_mobile>
            <div class="table_show_us">
                <div class="title_mob">
                    <div class="line_red_lef">

                    </div>
                    <div>
                        报告编号：201500
                    </div>
                </div>

                <div style="margin-bottom: 10px" v-for="(item,index) in user_msg">
                    <div class="title_title"></div>
                    <div class="hopital_name">患者信息</div>
                    <div class="line_css_mob"></div>
                    <div style="padding: 0 5px">
                        <div class="msg_for_hopital"><span>姓名</span><span class="value_msg">{{item.name}}</span></div>
                        <div class="msg_for_hopital"><span>体重</span><span class="value_msg">{{item.heave}}</span></div>
                        <div class="msg_for_hopital"><span>过敏史</span><span class="value_msg">{{item.guo_ming}}</span></div>
                        <div class="msg_for_hopital"><span>送检科室</span><span class="value_msg">{{item.check_room}}</span></div>
                    </div>
                </div>

                <div class="rebak_to_search">返回</div>

            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import basis_msg_mobile from './basis_msg_mobile.vue';
    export default {
        data () {
            return {
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
                ]
            }
        },
        components:{
            basis_msg_mobile
        },
        mounted(){

        },
        methods:{

        }
    }
</script>
