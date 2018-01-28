
//AMD实现原理与方式之-require.js

require(['./a.js'],function(a){
   var date = new Date();
   a.printDate(date);
});