import $ from 'jquery';
var date=function () {
    const date=new Date();
    var y=date.getFullYear();
    var m=date.getMonth()+1;
    var d=date.getDate();
    var data=[];
    var i=y;
    var count=0;
    for(i; i>1970; i--){
        data.push({
            id:count,
            value:i+'年',
            childs:[
                {id:'1',value:'1月',childs:[]},
                {id:'2',value:'2月',childs:[]},
                {id:'3',value:'3月',childs:[]},
                {id:'4',value:'4月',childs:[]},
                {id:'5',value:'5月',childs:[]},
                {id:'6',value:'6月',childs:[]},
                {id:'7',value:'7月',childs:[]},
                {id:'8',value:'8月',childs:[]},
                {id:'9',value:'9月',childs:[]},
                {id:'10',value:'10月',childs:[]},
                {id:'11',value:'11月',childs:[]},
                {id:'12',value:'12月',childs:[]},
            ]
        });

        $.each(data[count].childs,function (index) {
            var index_=index+1;
            var len_day;
            if(index_ == 1 || index_ == 3 || index_ == 5 || index_ == 7 || index_ == 8 || index_ == 10 || index_ == 12){
                len_day=31;
            }else if(index_ == 2){
                len_day=29;
            }else {
                len_day=30;
            }
            for(var b=1; b<=len_day ; b++){
                data[count].childs[index].childs.push({
                    id:b,
                    value:b+'日',
                });
            }

        });

        count++;


    }
    return data;
};

export default {
    date
}