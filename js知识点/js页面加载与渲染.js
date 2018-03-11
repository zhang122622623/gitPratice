/*js加载资源的形式
* 1、输入url或者跳转页面，加载html；
* 2、加载html中的静态资源，js文件、css文件、图片等；
* */


/*js加载一个资源的过程
* 浏览器根据DNS服务器得到域名的IP地址；
*向这个IP对应的服务器发出http请求；
*服务器收到、处理该http请求，作出响应；
*浏览器得到返回内容；
* */


/*浏览器渲染页面的过程
* 根据html结构生成DOM Tree；
* 根据CSS生成 CSSOM 类似DOM;
* 将DOM Tree和 CSSOM整合成 RenderTree;
* 根据RenderTree开始渲染和加载；
*ps:遇到<script>时，会执行该文件，阻塞渲染
* */


/*常见问题：
* 1、从输入url到得到html的详细过程；
* 2、windon.onload和DOMContentLoaded的区别；
* */