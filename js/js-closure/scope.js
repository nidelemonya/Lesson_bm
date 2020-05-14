var name = 'xiaoli';
var name3 = 'xiaohu';
// 函数作用域
function showName(){
    var name2='lihua'
    console.log(name);
    // add 也是变量 变量为函数 同样遵守作用域规则
    function add(){
        console.log(name2,'嵌套',name3); //顺着作用域链条逐次往外查找name2
    }
    add();
}
showName();
// if{} else{}
{
    var name1='liler';
    name = 'lihua';
}
console.log(name1,name);