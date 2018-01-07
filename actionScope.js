//js作用域和闭包
//1、作用域：全局作用域（变量提升、函数提升）、函数作用域（变量提升、this、arguments）
//2、作用域中变量提升、函数声明和函数表达式的区别

//!!3、this的几种不同使用场景：构造函数中、对象属性、普通函数、call/apply/bind
//构造函数:this为生成的对象实例
function Foo(name){
    //this = {} 先将this设置成空对象
    this.name = name;
    console.log(this);//this 为Foo{}
    return this; //可省略
}
var foo = new Foo('zhangsan');

//对象属性:this为对象
var obj = {
    name :'zhangsan',
    printName:function(){
        console.log(this);//this===obj
        alert(this.name);
    }
};
obj.printName();


//普通函数：
var name = 'zhangsan';
function f2() {
    var name ='222';
    console.log(this);//this===window
    alert(this.name);//输出zhangsan
}
f2();

//call/apply/bind 改变this
function f3(name, age) {
    alert(name);
    console.log(this);
}
f3.call({x:100},'zhangsan',20);//this为{x:100}
f3.apply({x:200},['zhangsan',20]);//this为{x:200}，传入参数为数组

var f4 = function(name){
    alert(name);
    console.log(this);
}.bind({x:300});//bind必须绑定在函数表达式上,this为{x:200}，
f4('zhangsan');

//4、闭包的两种使用场景实例:
//4-1、函数作为返回值
function isFirstLoad(id){
    var _list =[];
    return function (id) {
        if(_list.indexOf(id)>=0){
            return false;
        }else{
            _list.push(id);
            return true;
        }
    }
}

var firstload = isFirstLoad();
firstload(1);//true
firstload(1);//false
firstload(2);//true
firstload(2);//false

//4-2、函数作为参数传递
// （动态生成10个<a>标签，点击弹出序号）
//错误写法
var i,a;
for(i=0;i<10;i++){
     a = document.createElement('a');
     a.innerHTML = i+'<br>';
     a.addEventListener('click',function (e) {
         e.preventDefault();
         alert(i);
     });
     document.body.appendChild(a);
}

//正确写法
var i;
for(i=0;i<10;i++){
    (function (i) {
        var a = document.createElement('a');
        a.innerHTML = i+'<br>';
        a.addEventListener('click',function (e) {
            e.preventDefault();
            alert(i);
        });
        document.body.appendChild(a);
    })(i);//采用闭包自执行函数
}