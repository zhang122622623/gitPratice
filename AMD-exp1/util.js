define(function(){
   var util =  {
        getFormateDate:function(date,type){
            var y = date.getFullYear();
            var m = date.getMonth()+1;
            var d = date.getDate();
            if(type===1){
                return y+' - '+m+' - '+d;
            }
            if(type===2){
               return y+' 年 '+m+' 月 '+d+' 日';
            }
        }
    };
    return util;
});