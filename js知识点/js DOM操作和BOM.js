/*js中的DOM是树结构，操作DOM的常用方法有：
*一、获取元素
*1、getElementById()--返回元素节点
*2、getElementsByTagName()--返回节点列表,NodeList对象集合
*3、getElementsByClassName()--返回节点列表,NodeList对象集合，IE9以上支持
*
*二、获取子元素和父元素（操作DOM结构）--属性操作
*1、childNodes --例如：document.body.childNodes
*2、firstChild
*3、lastChild
*4、nextSibling
*5、previousSibling--紧邻当前元素之前的元素
*6、parentNode
*
* 三、生成、插入、删除DOM节点
* 1、createElement()--传入节点类型
* 2、createTextNode()--创建文本节点
* 3、appendChild()--在元素内部末尾插入节点
* 4、removeChild()--删除节点
* 5、replaceChild()--替换节点
* 6、insertBefore()--在某节点前面插入节点
*
*四、DOM节点属性操作
* 1、getAttribute()
* 2、setAttribute()
* 3、createAttribute()
*
*五、节点属性
* 1、nodeValue--节点值
* 2、nodeType--返回数字，节点类型
* 3、nodeName--返回字符串，节点名称
* */




/*BOM的常用考点
* 一、navigator
*用于浏览器的类型检测：userAgent
*
*二、screen
*screen.width和screen.height
*
*三、location
* 例如：网址https://www.medtrum.com/login/?country=CN#uid=345
* location.href；完整的url 如上，
* location.protocol:协议 --https
* location.host:域名--www.medtrum.com
* location.pathname:路径--/login
* location.search:url的参数--country=CN
* location.hash：#后面的内容--uid=345
*
*四、history
* history.go(number/url):
* history.back():history.go(-1)
* history.forward():history.go(1)
*
*
*五、Javascript刷新页面的几种方法：
*1 history.go(0)
2 location.reload()
3 location=location
4 location.assign(location)
5 document.execCommand('Refresh')
6 window.navigate(location)
7 location.replace(location)
8 document.URL=location.href
* */