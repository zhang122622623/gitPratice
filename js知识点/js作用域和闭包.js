/*js中的执行上下文
*
* 包含变量提升、函数声明、this、rgument、内部函数
*
* */

console.log(a)
var a = 100;

fn('zhangsan555')
function fn(name) {
    age = 23;
    console.log(name,age)
    var age;
}


/*js中的this取决于运行时而不是定义时,常见的几种this:
*
* 1、作为构造函数执行；
* 2、作为对象属性执行；
* 3、作为普通函数执行；
* 4、call、apply、bind
*
*
* */
var name = 'wangwu';
var A = {
    name:'zhangsan',
    printName:function () {
        console.log(this.name);
    }
};
var B = {name:'lisi'};

A.printName(); //'zhangsan' this===A
A.printName.call(B); //'lisi' this===B
var f1 = A.printName;
f1(); //'wangwu' this===window