/*手写Ajax*/
var xhr = new XMLHttpRequest();//创建XMLHttpRequest对象
xhr.open('CET','/api',false);//初始化
xhr.onreadystatechange(function () {//定义回调函数
   if(xhr.readyState===4){
       if(xhr.status===200){
           alert(xhr.responseText);
       }
   }
});
xhr.send(null);//执行

//网络请求状态码
/*xhr.readyState值：
* 0 -（未初始化）还没有调用send()
* 1 -（载入）已调用send()，正在发送请求
* 2 -（载入完成）send()方法执行完成，已收到全部响应内容
* 3-（交互）正在解析响应内容
* 4-（完成）响应解析完成，可供客户端调用
* */
/*xhr.status值：http状态码
* 2XX - 表示成功处理请求 200
* 3XX - 需要重定向，浏览器直接跳转
* 4XX - 客户端请求错误，403，404
* 5XX - 服务器端错误，500，504
* */


/*
* 跨域的产生原因：
* 浏览器有同源策略，不允许ajax访问其他域接口
* 跨域的条件：
* 协议、域名、端口，有一个不一样就是跨域
* http默认端口 80
* https默认端口 443
*
* 可以跨域的三个标签
* <img src=xxx>
* <link href=xxx>
* <script src=xxx>
* */


/*跨域的解决方式*
*1、前端用JSONP
*2、服务器端设置 http  responseHeader
*3、proxy代理呢？
 */