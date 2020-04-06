1.开发环境准备

2.听为主，下课在看录播或代码实现，
作业，打卡
HTML 5

父级div定义 height
原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。 
优点：简单、代码少、容易掌握 
缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题

父级div定义 overflow:hidden
原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度 
优点：简单、代码少、浏览器支持好

 结尾处加空div标签 clear:both
 原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度 
优点：简单、代码少、浏览器支持好、不容易出现怪问题
缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不好

，解释css sprites ，如何使用？
CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，
再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，
background-position可以用数字能精确的定位出背景图片的位置。
CSS Sprites为一些大型的网站节约了带宽，让提高了用户的加载速度和用户体验，不需要加载更多的图片

用原生js给一个按钮绑定两个onclick事件
var btn = document.getElementById("btn");
btn.addEventListener("click",hello1);
btn.addEventListener("click",hello2);
function hello1(){
 alert("hello 1");
}
function hello2(){
 alert("hello 2");
}
