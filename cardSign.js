function createCardSign(timestamp,nonceStr,appid,apiTicket) {
    appid ='wx877d7c1152ccc8ad';
    apiTicket= 'yaBD4lhgwcik_cBIMYRb3estJHY10Ou9qg03MEg'
    if(!timestamp){
        timestamp = Date.now();
    }
    if(!nonceStr){
        nonceStr = getNonceStr();
    }
    var strings =[appid,apiTicket,timestamp,nonceStr] .sort();
    var strings2 = strings.map(function (e) {
        if(appid===e){
            return 'appid='+e;
        }
        else if(apiTicket===e){
            return 'apiTicket='+e;
        }
        else if(timestamp===e){
            return 'timestamp='+e;
        }else{
            return 'nonceStr='+e;
        }
    });
    var str ='';
    strings2.forEach(function (t,i) {
        str = str+t;
        if(i<3){
            str = str+'&' ;
        }
    });
    var CardSignStr = sha1(str);
    if(!CardSignStr){
        return false;
    }
    return CardSignStr
   // console.log(strings2,str);

}
/*生成随机字符串*/
function getNonceStr(n) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        m = chars.length, n=16, str = '';
    for(var i=0;i<n;i++){
        str+= chars.charAt(Math.floor(Math.random()*m))
    }
    return str;
}
createCardSign()