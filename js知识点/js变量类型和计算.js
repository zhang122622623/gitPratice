/*值类型和引用类型：按存储方式分为这两种*/
var a = 100;
var b = a ;
a =200;
console.log(b);//100，值类型，互不相干

var x = {a:10};
var y = x;
y.a = 20;
console.log(x.a);//20，引用类型指向同一个数据；引用类型属性可以无限增加

/*数据转换的几种情况
* 1、+ 运算符
* 2、'===' 和'=='
* 3、if语句
* 4、逻辑运算:&&等
* /

/*逻辑值为false的几种情况
* 0 ‘ ’ false undefined null NaN
*/


/*typeof 的可能值*/
typeof 11 ;//number
typeof '100';//string
typeof true;//boolean
typeof undefined;//undefined
typeof null;//object
typeof {};//object
typeof [];//object
typeof console.log;//function


/*js中的内置函数--数据封装类对象
*  Object
*  Array
*  Number
*  String
*  Boolean
*  Date
*  Error
*  RegExp
*  Function
* /

/*js中的内置对象
 * Math
 * JSON:一种数据格式，也是JS对象；两个方法：parse和stringify
 * /

