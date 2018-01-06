 function Elem(id){
    this.elem = document.getElementById(id);
 }
 Elem.prototype.html = function(val){
     var elem = this.elem;
     if(val){
        elem.innerHTML = val;
         return this;
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