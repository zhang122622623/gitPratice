/*判断数组
* 1、value instanceof Array
* 2、Array.isArray(value)
* 3、Object.prototype.toString.call() =>区别数组和对象的最好方法，，可区别suoyouleix
* */


/*原型规则
*1、所有引用类型都有对象特性，即属性可以自由扩展
*2、所有引用类型都有_proto_属性，指向一个对象；
*3、所有函数都有prototype属性，指向一个对象；
*4、引用类型的_proto_属性等于其构造函数的prototype属性；
*5、查找引用类型的属性时，先查找其自身，自身没从其_proto_属性（其构造函数的prototype属性）
* 指向的对象中查找，若还是没有，继续往上查找，直到Object的prototype属性值为止；
*
*  Object.prototype._proto_ = null =>防止死循环；
* */
/*示例*/
function Foo(name){
    this.name = name;
}
Foo.prototype.alertName = function () {
    alert(this.name);
};

var f1 = new Foo('张三少');
f1.printName = function () {
    console.log(this.name);
};

f1.printName();
f1.alertName();

/*无论是构造函数中的this,还是原型对象上的this,指的都是实例自身*/
/*for in会遍历自身和原型上所有的可枚举属性
* 通过hasOwnProperty()可以判断是否是实例自身的属性
* */


/*new的过程
* 1、构建一个空对象
* 2、将this指向该对象；
* 3、为该对象赋值；
* 4、返回this;
* */


/*原型链继承的例子*/
function Elem(id){
    this.elem = document.getElementById(id);
}
Elem.prototype.html = function(val){
    var elem = this.elem;
    if(val){
        elem.innerHTML = val;
        return this;/*为了链式操作*/
    }else{
        return elem.innerHTML;
    }
};
Elem.prototype.on = function (type,fn) {
    var elem = this.elem;
    elem.addEventListener(type,fn);
};

var  obj = new Elem('div1');
obj.html('<p>javascript</p>').on('click',function(){
    alert('hello world')
});
