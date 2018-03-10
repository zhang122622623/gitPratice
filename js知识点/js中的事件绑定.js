/*基础的事件绑定用法*/
var btn1 = document.getElementById('button1');
btn1.addEventListener('click',function (event) {
    alert('clicked!');
});


/*通用绑定事件*/
var bindEvent = function (elem,type,fn) {
    elem.addEventListener(type,fn);
};
var btn2 = document.getElementById('button2');
bindEvent(btn2,'click',function (event) {
    alert('clicked!');
    event.preventDefault();
});




/*完善事件绑定
* 事件‘代理’---即将同一类元素的事件绑定在父节点，通过事件冒泡触发；
* 适合一个元素下面有多个同类型元素情况，以及同类型元素在动态增加情况;
* 使用代理的优势：1、代码简洁；2、减轻浏览器的压力
* */
function bindEvent2(elem,type,selector,fn) {
    if(fn == null){ //针对事件代理的处理
        fn = selector;
        selector =null;
    }
    elem.addEventListener(type,function (e) {
        if(selector){//使用代理
            var target = e.target;
            if(target.matches(selector)){
                fn.call(target,e);
            }
        }else{
            fn(e);
        }
    })
}
/*使用代理*/
var div1 = document.getElementById('div1');
bindEvent2(div1,'click','a',function (event) { //为div1下面的所有a元素绑定‘click’事件
   console.log(this.innerHTML);
});

/*不使用代理*/
var a1 = document.getElementById('a1');
bindEvent2(a1,'click',function (event) { //为id为'a'的元素绑定‘click’事件
    console.log(this.innerHTML);
});
